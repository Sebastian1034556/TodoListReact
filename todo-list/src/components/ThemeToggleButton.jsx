import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';

export function ThemeToggleButton() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className={isDarkMode ? ' bg-black  px-4 py-3 rounded shadow hover:bg-gray-600 hover:border text-white my-1 border-white' : 'bg-transparent px-4 py-3 rounded  text-black my-1 hover:bg-gray-500 hover:border border-black'}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

