import React from 'react';
import img2 from '../../../images/naim2.JPG';
import './Intro.css';

const Intro = () => {
    return (
        <div className="mt-5">
                <div className="row">
                    <div style={{marginTop:'60px'}} className="col-md-6 col-sm-12">
                       
                        <h1 className="text">Hi, I am <span className="name">Abdu Naim</span></h1>
                        <p>I am an enthusiastic JavaScript developer with knowing some framework for the frontend and the backend. I know Basic C, Java, Python but basically a MERN developer.</p>
                        
                        <apan className="button-st">
                        <a className="link-button" href="https://www.linkedin.com/in/abdunaim77/" target="_blank">Hire ME</a> 
                        <a className="link-button" href="https://drive.google.com/u/0/uc?id=1-1RcE7VaZEiTH7-q3PTNGwsOUSPi63mL&export=download" target="_blank">Resume</a> 
                        </apan>
                        
                    </div>
                    <div style={{marginTop:'40px'}} className="col-md-6 col-sm-12">
                        <div><img src={img2} className="center" alt="" /></div>
                    </div>
                </div>
        </div>
    );
};

export default Intro;