import React, { useState } from 'react';

const FlamesGame = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [relationship, setRelationship] = useState('');

    const calculateRelationship = () => {
        const removeCommonLetters = (str1, str2) => {
            const map1 = new Map([...str1].map(char => [char, (map1.get(char) || 0) + 1]));
            const map2 = new Map([...str2].map(char => [char, (map2.get(char) || 0) + 1]));

            for (let char of map1.keys()) {
                if (map2.has(char)) {
                    const count = Math.min(map1.get(char), map2.get(char));
                    map1.set(char, map1.get(char) - count);
                    map2.set(char, map2.get(char) - count);
                }
            }
            return [Array.from(map1.keys()).join(''), Array.from(map2.keys()).join('')];
        };

        const [remainingStr1, remainingStr2] = removeCommonLetters(name1, name2);
        const totalLength = remainingStr1.length + remainingStr2.length;
        const result = totalLength % 6;

        switch (result) {
            case 1:
                setRelationship('Friends');
                break;
            case 2:
                setRelationship('Love');
                break;
            case 3:
                setRelationship('Affection');
                break;
            case 4:
                setRelationship('Marriage');
                break;
            case 5:
                setRelationship('Enemy');
                break;
            case 0:
                setRelationship('Siblings');
                break;
            default:
                setRelationship('Please Enter valid input');
        }
    };

    const clearForm = () => {
        setName1('');
        setName2('');
        setRelationship('');
    };

    return (
        <div>
            <h3>FLAMES Game</h3>
            <div>
                <input
                    name="name1"
                    type="text"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    data-testid="input1"
                />
                <input
                    name="name2"
                    type="text"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    data-testid="input2"
                />
                <button onClick={calculateRelationship} data-testid="calculate_relationship">Calculate Relationship</button>
                <button onClick={clearForm} data-testid="clear">Clear</button>
            </div>
            {relationship && (
                <h3 data-testid="answer">Relationship: {relationship}</h3>
            )}
        </div>
    );
};

export default FlamesGame;
