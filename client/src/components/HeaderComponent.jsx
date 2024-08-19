import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ThemeToggleButton } from './ThemeToggleButton';
import { SearchBar } from './SearchBar';

export function HeaderComponent(){
    const {isDarkMode} = useContext(ThemeContext)
    return (
        <>
            <header className='flex flex-col items-center'>
                <div className={isDarkMode ? ' bg-black  flex justify-center items-center gap-4 w-full' : ' bg-gray-300 flex justify-center items-center gap-4 w-full'}>
                    <h1 className={isDarkMode ? ' text-white font-sans font-bold text-4xl' : ' text-black font-sans font-bold text-4xl'}>Todo List</h1>
                    <ThemeToggleButton/>
                </div>
                <nav className={'flex justify-center items-center mt-3 w-3/4'}>
                    <SearchBar></SearchBar>
                </nav>
                
            </header>
        </>
    )
}