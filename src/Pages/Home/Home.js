import React from 'react';
import MySkills from '../../MySkills/MySkills';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Intro from './Intro/Intro';

const Home = () => {
    return (
        <div className="bg-info">
            <Header></Header>
            <Intro></Intro>
            <MySkills></MySkills>
            
            
        </div>
    );
};

export default Home;