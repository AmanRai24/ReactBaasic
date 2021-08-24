import React from 'react'
import { Link } from 'react-router-dom';
import user from "../images/user.png";

const ContactCard=(props)=>{
    const {id,name,email,mobile}=props.contact;
    return(
            <div className="item">
                <img className="ui avatar image" src={user} alt="user"></img>
                <div className="content"> 
                <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact}}}>
                    <div className="header">
                        {name}
                    </div>
                    <div>
                        {email}
                    </div>
                    <div>
                        {mobile}
                    </div>
                    </Link>
                    
                </div>
                <i className="trash alternate icon" 
                        style={{fontSize:"22px" ,color:"red",marginTop:"7px", cursor:"pointer"}}
                        onClick={()=>props.clickHandler(id)} ></i>
            </div>
    )

};

export default ContactCard;
