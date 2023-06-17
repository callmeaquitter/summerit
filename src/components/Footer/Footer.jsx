import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
   return (
      <section id='contact'>
         <div className={styles.footer}>
            <div className={styles.main}>
               <div className={styles.col}>
                  <h4>Menu Links</h4>
                  <ul>
                     <li>
                        <a href='#home'>Home</a>
                     </li>
                     <li>
                        <a href='#about'>About</a>
                     </li>
                     <li>
                        <a href='#menu'>Menu</a>
                     </li>
                     <li>
                        <a href='#services'>Service</a>
                     </li>
                     <li>
                        <a href='#contact'>Contact</a>
                     </li>
                  </ul>
               </div>

               <div className={styles.col}>
                  <h4>Our Service</h4>
                  <ul>
                     <li>
                        <a href='#home'>Web Design</a>
                     </li>
                     <li>
                        <a href='#about'>Web Development</a>
                     </li>
                     <li>
                        <a href='#menu'>Marketing</a>
                     </li>
                     <li>
                        <a href='#services'>Product Management</a>
                     </li>
                     <li>
                        <a href='#contact'>Graphic Design</a>
                     </li>
                  </ul>
               </div>

               <div className={styles.col}>
                  <h4>Information</h4>
                  <ul>
                     <li>
                        <a href='#home'>About us</a>
                     </li>
                     <li>
                        <a href='#about'>Delivery Information</a>
                     </li>
                     <li>
                        <a href='#menu'>Privacy Policy</a>
                     </li>
                     <li>
                        <a href='#services'>Terms & Policy</a>
                     </li>
                  </ul>
               </div>

               <div className={styles.col}>
                  <h4>Contact Us</h4>
                  <div className={styles.social}>
                     <a href='#home' aria-label = "home">
                        <i className={styles.bx_bxl_facebook}></i>
                     </a>
                     <a href='#about' aria-label = "about">
                        <i className={styles.bx_bxl_instagram}></i>
                     </a>
                     <a href='#menu' aria-label = "menu">
                        <i className={styles.bx_bxl_twitter}></i>
                     </a>
                     <a href='#services' aria-label = "services">
                        <i className={styles.bx_bxl_youtube}></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Footer;
