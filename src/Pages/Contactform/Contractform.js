import React from 'react';
import './Contactform.css';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router';

const Contractform = () => {

    const history = useHistory()
    const sendEmail =(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_zxf760o','template_82l2rhp',e.target,'user_uY0hn0Olg2IVodpo4NWls')
        .then(res=>{
            
        })
        .catch(error=>console.log(error));
        alert('Thanks for your message')
        e.target.reset()
        history.push('/')


        
    }


    return (
        
        <div className="container border image-border">
            <div className="row">
                <div className="col-md-12">

               <h1>Contact Me</h1>
            <form className="box-form"
            onSubmit={sendEmail}
            >
                <label>Name</label>
                <input type="text" name="name" className="form-control" />

                <label>Email</label>
                <input type="email" name="user-email" className="form-control" />

                <label>Message</label>
                <textarea name="message" id="" rows="4" className="form-control" />
                <input type="submit" value="send" className="form-control btn btn-primary " />
            </form>
               </div>
                </div>
                </div>
            
    );
};

export default Contractform;