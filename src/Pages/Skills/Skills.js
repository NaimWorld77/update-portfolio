import React from 'react';
import img1 from '../../images/skills/convert-psd.jpg'
import img2 from '../../images/skills/web-design.jpg'
import img3 from '../../images/skills/mern-stack.jpg'

const Skills = () => {
    return (
        <div>
            <div className="row mx-4 my-4">
                <h1 style={{color:'gold',fontWeight:'bold'}} className="py-3"> <u>MY SKILLS</u> </h1>
                <div className="col-md-4 col-sm-12 my-4">
                    <div style={{height:'100%'}} className="shadow p-3 mb-5 bg-body rounded">
                    <img  src={img1} className="img-fluid" alt="" />
                    <h3>PSD to HTML</h3>
                    <p className="text-start">I can covert any PSD design to a responsive webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works in portfolio tab in this website</p>

                    </div>
                </div>
                <div className="col-md-4 col-sm-12 my-4">
                <div style={{height:'100%'}} className="shadow p-3 mb-5 bg-body rounded">
                    <img src={img2}  className="img-fluid" 
                    alt="" />
                     <h3>Web Design</h3>
                    <p>I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 my-4">
                <div style={{height:'100%'}} className="shadow p-3 mb-5 bg-body rounded">
                    <img src={img3} className="img-fluid" alt="" />
                    <h3>MERN Stack Development</h3>
                    <p>I am a MERN stack web developer. I use MongoDB for database and Express JS, Node Js for server side work.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;