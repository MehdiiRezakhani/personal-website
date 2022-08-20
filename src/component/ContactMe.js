import React from 'react';
//style
import styles from './ContactMe.module.css';
const ContactMe = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        alert("Please send me a message on WhatsApp")
    }
    return (
        <div className={styles.ContactMe}>
            <div className={styles.ContactInformation}>
                <h4>Contact Information</h4>
                <p>Have some project? or maybe just want to say hello?<br/>I prefer to receive your messages on <a href='https://wa.me/+989210393561' target="_blank" rel="noreferrer">WhatsApp</a>.</p>
                <div>
                    <a href="https://wa.me/+989210393561" rel='noreferrer'><i class="fab fa-whatsapp si"></i>phone: +989210393561</a>
                    <a href="mailto:mehdiirezakhani@gmail.com" target="_blank" rel='noreferrer'><i class="fas fa-envelope si"></i>Email: mehdiirezakhani@gmail</a>
                    <a href="https://au.linkedin.com/in/mehdiirezakhani" target="_blank" rel='noreferrer'><i class="fab fa-linkedin si"></i>Linkedin: mehdiirezakhani</a>
                    <a href="https://github.com/MehdiiRezakhani" target="_blank" rel='noreferrer'><i class="fab fa-github si"></i>GitHub: MehdiiRezakhani</a>
                </div>
            </div>
            <div className={styles.ContactForm}>
                <form onSubmit={event => submitHandler(event)}>
                    <label>Name</label>
                    <input type="text" placeholder="Your Name" />
                    <label>Email</label>
                    <input type="text" placeholder="Your Email" />
                    <label>Message</label>
                    <input type="text" placeholder="Your Message"  />
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;