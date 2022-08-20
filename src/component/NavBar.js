import React, { useState } from 'react';
import {Link} from 'react-router-dom'
//style
import styles from './NavBar.module.css'
import Styled from 'styled-components';

//styled-component
//Hamburger Menu
const Div = Styled.div`
    display: none;
    position:fixed;
    top:40px;
    right:30px;
    width:40px;
    height:40px;
    z-index:10;
    cursor:pointer;
    @media (max-width:800px){
        display:block;
    }
    div {
        margin:5px;
        width:40px;
        height:5px;
        background-color: ${props => props.open ? `var(--White)`: `var(--Primary-Lavender)`};
        border-radius:10px;
        transform-origin:5px;
        transition: all ease 0.3s;
        -webkit-transition: all ease 0.3s;
        -moz-transition: all ease 0.3s;
        -ms-transition: all ease 0.3s;
        -o-transition: all ease 0.3s;
        &:nth-child(1) {
            transform: ${props => props.open?`rotate(45deg)`:`rotate(0deg)`};
        }
        &:nth-child(2) {
            transform: ${props => props.open? `translateX(-100%)`:`translateX(0)`};
            opacity: ${props => props.open? 0:1};
        }
        &:nth-child(3) {
           transform: ${props => props.open?`rotate(-45deg)`:`rotate(0deg)`};
        }
    }

`
const UL = Styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        padding: 0px 15px 0px;
        font-size: 2rem;
        font-style: normal;
        font-weight: 600;
        line-height: 3rem;
        cursor: pointer;
        &:not(last-child) a {
            color: var(--White);
            transition: all ease 0.3s;
            -webkit-transition: all ease 0.3s;
            -moz-transition: all ease 0.3s;
            -ms-transition: all ease 0.3s;
            -o-transition: all ease 0.3s;
        }
        &:not(last-child) a:hover{
            color: var(--Primary-Lavender);
        }
        &:last-child a { 
            color: var(--Primary-Lavender);
            border: 1px solid var(--Primary-Lavender);
            padding: 10px;
            border-radius: 4px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -ms-border-radius: 4px;
            -o-border-radius: 4px;
            transition: all ease 0.3s;
            -webkit-transition: all ease 0.3s;
            -moz-transition: all ease 0.3s;
            -ms-transition: all ease 0.3s;
            -o-transition: all ease 0.3s;
        }
        &:last-child a:hover {
            background-color: var(--Primary-Lavender);
            color: var(--White);
        }
    }
    
    @media (max-width:800px){
        margin:0px;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        height:100vh;
        background-color:var(--Primary-Lavender);
        z-index:5;
        position:fixed;
        top:0px;
        right:0px;
        padding:10px;
        transform: ${props => props.open? `translateX(0)`:`translateX(100%)`};
        opacity: ${props => props.open? 1:0};
        transition: all ease 0.3s;
        -webkit-transition: all ease 0.3s;
        -moz-transition: all ease 0.3s;
        -ms-transition: all ease 0.3s;
        -o-transition: all ease 0.3s;
        
        li {
            font-size:1.5rem;
            margin-top:5px;
            padding:10px;
            &:nth-child(1) {
                margin-top:150px;
            }
            &:not(last-child) a:hover {
                color: var(--Secondary-Gray);
            }
            &:last-child a {
                border:1px solid var(--White);
                color:var(--White);
                padding:5px;
                transition: all ease 0.3s;
                -webkit-transition: all ease 0.3s;
                -moz-transition: all ease 0.3s;
                -ms-transition: all ease 0.3s;
                -o-transition: all ease 0.3s;
            }
            &:last-child a:hover {
                color: var(--Primary-Lavender);
                background-color: var(--White)
            }
        }
        
    }
    

`
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const ScrollHandler = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    return (
        <div className={styles.NavBar}>
            <div className={styles.titleContainer}>
                <Link to='/' onClick={ScrollHandler}><p>Mehdi<span>Rezakhani</span></p></Link>
                <Link to='/' onClick={ScrollHandler}><p>M<span>R</span></p></Link>
            </div>
            <div>
                <Div onClick={()=> setOpen(!open)} open={open}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Div>
                <UL open={open}>
                    <li><Link to='/#' onClick={ScrollHandler}>Home</Link></li>
                    <li><Link to='/resume' onClick={ScrollHandler}>Resume</Link></li>
                    <li><Link to='/projects' onClick={ScrollHandler}>Project</Link></li>
                    <li className={styles.ContactButton} onClick={ScrollHandler}><Link to="/contactme">Contact Me</Link></li>
                </UL>
            </div>
        </div>
    );
};
export default NavBar;