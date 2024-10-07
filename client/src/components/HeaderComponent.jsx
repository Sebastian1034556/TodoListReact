import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ThemeToggleButton } from './ThemeToggleButton';
import { SearchBar } from './SearchBar';
import { LoginButton } from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from './LogoutButton';

export function HeaderComponent(){
    const {isDarkMode} = useContext(ThemeContext)
    const {isAuthenticated}= useAuth0()
    return (
        <>
            <header className='flex flex-col items-center'>
                <div className={isDarkMode ? ' bg-black  flex justify-center items-center gap-4 w-full' : ' bg-gray-300 flex justify-center items-center gap-4 w-full'}>
                    <h1 className={isDarkMode ? ' text-white font-sans font-bold text-4xl' : ' text-black font-sans font-bold text-4xl'}>Todo List</h1>
                    <ThemeToggleButton/>
                    {isAuthenticated ? <LogoutButton classNames="bg-red-500 text-white p-4"/> : <LoginButton/>} 
                </div>
                <nav className={'flex justify-center items-center mt-3 w-3/4'}>
                    <SearchBar></SearchBar>
                </nav>
                
            </header>
        </>
    )
}