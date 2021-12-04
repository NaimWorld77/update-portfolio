import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/NaHealthCare/1.jpg';
import img2 from '../../images/NaHealthCare/2.jpg';
import img3 from '../../images/NaHealthCare/3.jpg';

const ThreeProject = () => {
    return (
        <div className=" bg-dark">
            <div className="row py-5 mx-2">
                <div className="col-md-12 col-sm-12">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        />

                        
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-md-12 col-sm-12">
                <h1 className="text-white">Creative Agency</h1>
                    <span className="text-white text-start">
                    It is an agency website, which serves some services like web development, graphics design, mobile application design, photography etc. All the facilities of this website are listed here:
                    Admin can see all order lists of the users and change the order's status by drop down menu.
                    Admin can add more services
                    Admin can make a person 'Admin' by providing those person's email.
                    User can order a service by providing a demo picture
                    User can see his all orders and order's status.
                    User can submit a review about a service, which are shown in the homepage randomly.
                    </span>
                    <h2 className="text-white mt-2">Technologies</h2>
                    <button type="button" class="btn btn-warning me-2">HTML5</button>
                    <button type="button" class="btn btn-warning me-2">CSS3</button>
                    <button type="button" class="btn btn-warning me-2">React JS</button>
                    <button type="button" class="btn btn-warning me-2">Firebase</button>
                    <button type="button" class="btn btn-warning me-2">React Router Dom</button>
                    <button type="button" class="btn btn-warning me-2">Bootstrap</button>
                    <button type="button" class="btn btn-warning me-2">React Bootstrap</button>
                    <div>
                        <a href="https://na-healthcare-77.web.app/" target="_blank">
                        <button type="button" class="btn btn-danger me-2">
                        <i class="fab fa-chrome"></i> 
                            Live Site
                        </button>
                        </a>
                        <a href="https://github.com/NaimWorld77/healthcare-website" target="_blank">
                        <button type="button" class="btn btn-danger me-2">
                        <i class="fab fa-github-square"></i>
                            
                            Code Link
                        </button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ThreeProject;