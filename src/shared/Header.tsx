import React from 'react';
import logo from '../assets/images/mov.jpg';

export interface IAppProps {
}

const Header = (props: IAppProps) => {

    return (
        <div className="flex justify-center items-center w-100 h-20 drop-shadow bg-white">
            <div className="w-11/12 flex justify-between items-center mx-auto">
                <a href="home.html"><img alt="" src={logo} width="170px" /></a>
                
                <ul className="flex justify-between w-36 font-medium">
                    <li><a href="home.html">HOME</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                </ul>
            </div>
        </div>
    );

}

export default Header;
