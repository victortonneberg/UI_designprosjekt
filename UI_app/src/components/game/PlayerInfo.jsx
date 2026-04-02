import React, { useState } from 'react';
export default function PlayerInfo() {
   

    const [playerName, setPlayerName] = useState('');
    const [difficulty, setDifficulty] = useState('easy');

    const handleInputChange = (setter, value) => {
        setter(value);
        console.log(value);
    };

    return (
        <div>
            <article>
                <label>Spillernavn:</label>
                <input
                    type="text"
                    value={playerName}
                    onChange={(e) => handleInputChange(setPlayerName, e.target.value)}
                />
            </article>
            <article>
                <label>Vanskelighetsgrad:</label>
                <select
                    value={difficulty}
                    onChange={(e) => handleInputChange(setDifficulty, e.target.value)}
                >
                    <option value="easy">Lett</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Vanskelig</option>
                </select>
            </article>
        </div>
    );
}