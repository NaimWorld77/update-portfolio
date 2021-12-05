import React from 'react';

const Education = () => {
    return (
        <div className="mx-4 my-4" id="education">
        <div className="">
            <h1 style={{color:'gold',fontWeight:'bold'}}> <u>Education</u>
            </h1>
            <div className="row mx-4">
                <div className="col-md-4 cod-sm-12  mt-4">
                <div style={{height:'100%'}}  className="shadow p-2 mb-4 bg-body rounded">
                    <h2 style={{color:'tomato'}}>Extra Skills</h2>
                    <ul>
                        <li className="text-start">Abode Photoshop</li>
                        <li className="text-start">Camtasia</li>
                        <li className="text-start">Illstrator</li>
                        <li className="text-start">Photagraphy</li>
                        <li className="text-start">Video Editing</li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-4 cod-sm-12  mt-4 ">
                <div style={{height:'100%'}} className="shadow p-2 mb-4 bg-body rounded">
                    <h2 style={{color:'tomato'}}>Education</h2>
                    <h5 className="text-start ms-4"><i class="fas fa-university"></i> Undergraduate</h5>
                   <ul>
                       <li className="text-start"> Bachelor of Science (B.Sc) in Computer Science and Technology (4th year).</li>
                       <li className="text-start">Nanjing University of Information Science & Technology, China.</li>
                       
                   </ul>
                   <h5 className="text-start ms-4"><i class="fas fa-school"></i> Higher Secondary School Certificate</h5>
                   <ul>
                       <li className="text-start">Science</li>
                       <li className="text-start">Cox's Bazar City College, Cox's Bazar.</li>
                    </ul>
                    <h5 className="text-start ms-4"><i class="fas fa-school"></i> Secondary School Certificate</h5>
                    <ul>
                       <li className="text-start">Science</li>
                       <li className="text-start">Kawer Khop Hakim Rakima High School, Ramu, Cox's Bazar.</li>
                       <li className="text-start">Polo Ground ML High School, TigerPass, Chattogram.</li>
                    </ul>
                </div>
                </div>
                <div className="col-md-4 cod-sm-12  mt-4">
                <div style={{height:'100%'}} className="shadow p-2 mb-4 bg-body rounded">
                    <h2 style={{color:'tomato'}}>Social Activities</h2>
                    <ul>
                        <li className="text-start">Volunteer for Bangladesh(VBD)</li>
                        <li className="text-start">Committee Member (Cox’s Bazar district).</li>
                        <li className="text-start">Co-Executive member of Ramu Blood Donner Society(RBDS).</li>
                    </ul>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Education;