import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
//style
import styles from './styles/App.module.css'
//pages
import HomePage from './pages/HomePage';
import Projects from './pages/Projects'
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe'
//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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