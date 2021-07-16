import React, { useState } from 'react';
import Select from 'react-select';
import './Theme.css';

const Theme = () => {
    const [theme, setTheme] = useState("")

    const options = [
        { value: 'red', label: "Apple" },
        { value: 'orange', label: "Orange" },
        { value: 'yellow', label: "Pineapple" },
        { value: 'green', label: "Lime" },
        { value: 'blue', label: "Blueberry" },
        { value: 'white', label: "Neutral" },
        { value: 'black', label: "Noir" },
        { value: 'dark', label: "Dark Mode" }
    ]

    return (
    <div className="theme">
        <Select
            className="theme-select"
            placeholder="Select a theme"
            value={theme}
            onChange={(event) => setTheme(event.value)}
            options={options}
        />
    </div>
    )
}

export default Theme;
