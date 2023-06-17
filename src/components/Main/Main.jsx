import React from 'react';

import Sixth from "../../img/box.png";
import Seventh from "../../img/delivery-truck.png";
import Eighth from "../../img/deliver.png";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
    <section className= {styles.home} id="home">
        <div className={styles.home_text}>
            <h1>Asian Food</h1>
            <h2>Food The Most Precious Things</h2>
            <a href="#home" className={styles.btn}>Today's Menu</a>
        </div>

        <div className={styles.home_img}>
            <img src="https://img.freepik.com/free-vector/healthy-food-illustration_24877-52319.jpg?w=740&t=st=1686847200~exp=1686847800~hmac=acf89feadb9f3019c915c6337c14bc009a56d63f09684f2e4515603a97728408" aria-label ="Mainpic" />
        </div>
    </section>

    
    <section className={styles.about} id="about">
        <div className={styles.about_img}>
            <img src="https://img.freepik.com/free-vector/realistic-poke-bowl-food-illustration_52683-82197.jpg?w=740&t=st=1686496894~exp=1686497494~hmac=e6d577f83939474a5cbc193db00dbefd055e69f556022ad0780eaa28f6dc5ac0" aria-label ="Second" />
        </div>

        <div className={styles.about_text}>
            <span>About Us</span>
            <h2>We speak the good</h2>
            <h2>food language</h2>
            <p>Every day our team prepares products from natural ingredients for visitors. 
            A varied menu, convenient eco—friendly packaging, pleasant atmosphere, fast service 
            and affordable prices - this is not a complete list of reasons why Russians choose us</p>
          <a href="#home" className={styles.btn}>Learn More</a>
        </div>
    </section>


    
    <section className={styles.menu} id="menu">
        <div className={styles.heading}>
            <span>Food menu</span>
            <h2>Fresh taste and great price</h2>
        </div>

        <div className="menu_container">
            <div className={styles.box}>
                <div className={styles.box_img}>
                    <img src="https://img.freepik.com/free-vector/realistic-poke-bowl-food-illustration_52683-82197.jpg?w=740&t=st=1686496894~exp=1686497494~hmac=e6d577f83939474a5cbc193db00dbefd055e69f556022ad0780eaa28f6dc5ac0" aria-label = "Third" />
                </div>
                <h2>Salmon Poke Bowl</h2>
                <h3>320g</h3>
                <span>$7.00</span>
                <i className={styles.bx_bx_cart_alt}></i>
            </div>

            <div className={styles.box}>
                <div className={styles.box_img}>
                    <img src="https://img.freepik.com/free-vector/realistic-poke-bowl-food-illustration_52683-82198.jpg?w=740&t=st=1686496874~exp=1686497474~hmac=77a23d491551d27a4a1b06e2d1ed8035c907351a81b6e4820102ab7f06c78ed8" aria-label = "Fourth" />
                </div>
                <h2>Tuna Poke Bowl</h2>
                <h3>310g</h3>
                <span>$6.00</span>
                <i className={styles.bx_bx_cart_alt}></i>
            </div>

            <div className={styles.box}>
                <div className={styles.box_img}>
                    <img src="https://img.freepik.com/free-vector/realistic-vietnamese-food-illustration_52683-82196.jpg?t=st=1686496894~exp=1686497494~hmac=f407abdaa213281cd4204e1b6e6d0e4eab178a4e125f039e3a8aaeca4b67f641" aria-label ="Fifth" />
                </div>
                <h2>Pho Bo</h2>
                <h3>320g</h3>
                <span>$8.00</span>
                <i className={styles.bx_bx_cart_alt}></i>
            </div>
        </div>
    </section>

     
    <section className={styles.services} id="services">
    <div className={styles.heading}>
        <span>Services</span>
        <h2>We provide best quality food</h2>
    </div>

    <div className={styles.service_container}>
        <div className={styles.s_box}>
            <img src={Sixth} alt="Sixth" />
            <h3>Order</h3>
            <p>Before becoming our suppliers, companies are carefully selected 
        for compliance with the highest standards</p>
        </div>

        <div className={styles.s_box}>
            <img src={Seventh} alt="Seventh" />
            <h3>Shipping</h3>
            <p>We are not afraid of inspections, because we ourselves strictly check the quality 
        and safety of our products at every stage</p>
        </div>

        <div className={styles.s_box}>
            <img src={Eighth} alt="Eighth" />
            <h3>Delivered</h3>
            <p>It takes 4 hours to track every ingredient for our products. After all, high quality is the norm for us</p>
        </div>
    </div>
    </section>

      
    <section className={styles.cta}>
    <h2>We make quality food</h2>
    <h2>Everyday</h2>
    <a href="#home" className={styles.btn}>Let's talk</a>
    </section>
    </>
  )
}

export default Main