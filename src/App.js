import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
//style
import styles from './App.module.css'
//component
import HomePage from './component/HomePage';
import NavBar from './component/NavBar';
import Projects from './component/Projects'
import Footer from './component/Footer';
import Resume from './component/Resume';
import ContactMe from './component/ContactMe'
const App = () => {
    return (
        <div className={styles.App}>
            <NavBar/>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/*' element={<Navigate to='/'/>}/>
              <Route path='/resume' element={<Resume/>}/>
              <Route path='/projects' element={<Projects />}/>
              <Route path='/ContactMe' element={<ContactMe/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;