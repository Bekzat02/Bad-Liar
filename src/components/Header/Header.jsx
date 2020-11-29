import React from "react";
import s from './Header.module.css';
const Header=() =>{
    return (
        <header className={s.header}>
            <img src='https://angular.io/assets/images/logos/angular/angular_solidBlack.png'/>
        </header>
    );
};

export default Header;