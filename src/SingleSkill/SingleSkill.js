import React from 'react';

const SingleSkill = ({skill}) => {

    const {name,description,img} = skill;

    return (
        <div className="mx-3">
             <div className="col-md-4 col-sm-12">
             <div class="card" style={{width: "18rem"}}>
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
            </div>
            </div>
            
                        

            </div>
                
        </div>
    );
};

export default SingleSkill;