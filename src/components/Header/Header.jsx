import React from 'react';
import { useState } from 'react';
import styles from "./Header.module.css";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const [active, setActive] = useState(false);
  
  return (
    <header>
        <a href="#home" className={styles.logo}>2Good4Food</a>
        
        <BiMenu className={styles.menu_icon} onClick={() => setActive(!active)} />

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