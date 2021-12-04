import React from 'react';
import img1 from '../../images/ssp/luxary_Gold.jpg'
import img2 from '../../images/ssp/CoxATour.jpg'
import img3 from '../../images/ssp/Na_HealthCare.jpg'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        
        <div>
            <div className="row mx-4">
                <h1 style={{color:'gold',fontWeight:'bold'}} className="py-3"> <u>MY PROJECTS</u> </h1>
                <div className="col-md-4 col-sm-12">
                    <div style={{height:'100%'}} className="shadow p-2 mb-4 bg-body rounded">
                    <img  src={img1} className="img-fluid" alt="" />
                    <h3>Luxary-Gold <span>(Jewellery Website)</span></h3>
                    <ul className="text-start">
                        <li>Home,product, collection and also dashboard are appear in navbar.   
                        </li>
                        <li>Log in with password, email, and by google.
                        </li>
                        <li>Buy,manage his/her order and can delete order,admin can add a new product.
                        </li>
                    </ul>
                   <Link to="/oneprojects">
                   <button type="button" class="btn btn-primary">See More</button>
                   </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                <div style={{height:'100%'}}  className="shadow p-2 mb-4 bg-body rounded">
                    <img src={img2}  className="img-fluid" 
                    alt="" />
                    <h3>CoxATour <span>(Tourism Website)</span></h3>
                    <ul className="text-start">
                        <li>User can see a home, services, and login page in the navbar.   
                        </li>
                        <li>User can book a package from this site and also can delete his/her booking.

                        </li>
                        <li>Admin can manage all booking information.
                            
                        </li>
                    </ul>
                    <Link to="/twoprojects">
                   <button type="button" class="btn btn-primary">See More</button>
                   </Link>
                </div>
                </div>

                <div className="col-md-4 col-sm-12">
                <div style={{height:'100%'}}  className="shadow p-2 mb-4 bg-body rounded">
                    <img src={img3} className="img-fluid" alt="" />
                    <h3>NA HeathCare <span>(Health Care Website)</span></h3>
                    <ul className="text-start">
                        <li>User can see different types of services. 
                        </li>
                        <li>Without logging user can’t see all details of the service.
                        </li>
                        <li>Slider, services, and footer appear on the home page.

                        </li>
                    </ul>
                   <Link to="/threeproject">
                   <button type="button" class="btn btn-primary">See More</button>
                   </Link>
                    </div>
                    </div>
                    
                
                </div>
            </div>
        
        
        
    );
};

export default Projects;