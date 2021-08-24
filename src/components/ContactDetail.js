import React from 'react'
import { Link } from 'react-router-dom';
import user from "../images/user.png";

const ContactDetail=(props)=>{
  // console.log(props);
    const{name,email,mobile}=props.location.state.contact;
    return(
        <div style={{marginTop:"80px"}} className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"></img>
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="description">
                        {email}
                    </div>
                    <div className="description">
                        {mobile}
                    </div>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
              <Link to="/"><button className="ui button blue">Back To Contact List</button>
              </Link>  
            </div>
        </div>    
    );

};

export default ContactDetail;
