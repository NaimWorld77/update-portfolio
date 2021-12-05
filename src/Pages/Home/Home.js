import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contractform from '../Contactform/Contractform';
import Education from '../Education/Education';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Intro from './Intro/Intro';

const Home = () => {
    return (
        <div className="bg-info" id="home">
            <Header></Header>
            <Intro></Intro>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contractform></Contractform>
            <AboutMe></AboutMe>    
        </div>
    );
};

export default Home;