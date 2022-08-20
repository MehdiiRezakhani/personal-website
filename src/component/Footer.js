import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Footer.module.css';
const Footer = () => {
    const ScrollHandler = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    return (
        <div className={styles.Footer} id="ContactMe">
            <Link to='/' onClick={ScrollHandler}><h3>Mehdi<span>Rezakhani</span></h3></Link>
            <div className={styles.socialBox}>
                        <a href="https://au.linkedin.com/in/mehdiirezakhani" target="_blank" rel='noreferrer'><i className="fab fa-linkedin si"></i></a>
                        <a href="https://github.com/MehdiiRezakhani" target="_blank" rel='noreferrer'><i className="fab fa-github si"></i></a>
                        <a href="mailto:mehdiirezakhani@gmail.com" target="_blank" rel='noreferrer'><i className="fas fa-envelope si"></i></a>
                        <a href="https://wa.me/+989210393561" target="_blank" rel='noreferrer'><i className="fab fa-whatsapp si"></i></a>
                        <a href="https://t.me/Dorminaco" target="_blank" rel='noreferrer'><i className="fab fa-telegram si"></i></a>

            </div>
            <p>COPYRIGHT © 2022 DEVELOPED BY <a href="https://au.linkedin.com/in/mehdiirezakhani" target="_blank" rel='noreferrer'>MEHDIREZAKHANI</a></p>
        </div>
    );
};

export default Footer;