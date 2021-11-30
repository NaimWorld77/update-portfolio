import React, { useEffect, useState } from 'react';
import SingleSkill from '../SingleSkill/SingleSkill';
import './MySkills.css';




const MySkills = () => {

    const [skills,setSkills] = useState([]);
    useEffect(()=>{
        fetch('/skills.json')
        .then(res=>res.json())
        .then(data=>setSkills(data))
    },[])

    return (
        <div className="mt-5 my-5">
            <div className="row">
                <h1>Choose One</h1>
                <div className="d-flex justify-content-center">
                    {
                        skills.map((skill)=><SingleSkill
                        key={skill.id}
                        skill={skill}
                        ></SingleSkill>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MySkills;