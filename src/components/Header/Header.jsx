import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
        <a href="#home" className={styles.logo}>2Good4Food</a>
        <div className={styles.bx_bx_menu} id="menu_icon"></div>

        <ul className={styles.navbar}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </header>
  )
};

export default Header;