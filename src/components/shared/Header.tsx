import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/mov.jpg';


export interface IAppProps {
}

const Header = (props: IAppProps) => {

    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="fixed top-0 z-10 flex justify-center items-center w-full h-18 drop-shadow-md bg-white">
            <div className="w-10.5/12 sm:w-10.5/12 md:w-9.5/12 lg:w-9.5/12 xl:w-9.5/12 flex justify-between items-center mx-auto">
                <Link to="/"><img alt="" src={logo} width="170px" /></Link>

                <ul className="flex justify-between items-center w-24 font-medium">
                    <li><Link to="/about">ABOUT</Link></li>

                    <button className="bg-primary p-4 rounded-3xl" onClick={handleThemeSwitch}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Sunny</title><path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" /></svg>
                    </button>
                </ul>
            </div>
        </div>
    );

}

export default Header;
