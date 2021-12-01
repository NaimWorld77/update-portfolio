import React from 'react';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Intro from './Intro/Intro';

const Home = () => {
    return (
        <div className="bg-info">
            <Header></Header>
            <Intro></Intro>
            <Skills></Skills>
            <Projects></Projects>
            
            
            
            
        </div>
    );
};

export default Home;