import React from 'react';
import Select from 'react-select';
import './Theme.css';

const Theme = ({ theme, handleSelect }) => {

    const options = [
        { value: 'red', label: "Red" },
        { value: 'orange', label: "Orange" },
        { value: 'khaki', label: "Yellow" },
        { value: 'green', label: "Green" },
        { value: 'blue', label: "Blue" },
        { value: 'white', label: "Neutral" },
        { value: 'black', label: "Noir" },
    ]

    return (
    <div className="theme">
        <Select
            className="theme-select"
            placeholder="Select a theme"
            value={theme}
            onChange={(event) => handleSelect(event.value)}
            options={options}
        />
    </div>
    )
}

export default Theme;
