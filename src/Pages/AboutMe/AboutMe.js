import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <div className="row">
                <div  className="col-md-12 col-sm-12">
                    <div style={{margin:"40px"}} >
                    <h1>ABDU NAIM</h1>
                    <h5>Bachelor of Science (B.Sc) in Computer Science and Technology (4th year).</h5>
                    <h5>Ramu, Cox's Bazar, Bangladesh.</h5>
                    <div>
                    <a style={{marginRight:"10px",hover:'cyan'}} href="https://web.facebook.com/profile.php?id=100009662256908" target="_blank">
                        <button type="button" class="btn btn-danger">
                        <i className="fab fa-facebook"></i></button>
                        </a>
                    <a style={{marginRight:"10px"}} href="https://www.youtube.com/channel/UCnmiK5AlAp-ahFT4vzik46Q" target="_blank">
                        <button type="button" class="btn btn-danger">
                        <i className="fab fa-youtube"></i></button>
                        </a>
                    <a style={{marginRight:"10px"}} href="https://github.com/NaimWorld77" target="_blank">
                        <button type="button" class="btn btn-danger">
                        <i className="fab fa-github"></i></button>
                        </a>
                    <a style={{marginRight:"10px"}} href="https://www.linkedin.com/in/abdunaim77/" target="_blank">
                        <button type="button" class="btn btn-danger">
                        <i className="fab fa-linkedin-in"></i></button>
                        </a>
                    <a style={{marginRight:"10px"}} href="https://www.instagram.com/naimabdu77/" target="_blank">
                        <button type="button" class="btn btn-danger">
                        <i className="fab fa-instagram-square"></i></button>
                        </a>
                        <h6 style={{marginTop:"40px"}}>Copyright © 2021 | Abdu Naim</h6>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;