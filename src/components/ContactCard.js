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
                    <i className="trash alternate icon" 
                        style={{fontSize:"22px" ,color:"red",marginTop:"7px",marginLeft:"10px" , cursor:"pointer"}}
                        onClick={()=>props.clickHandler(id)} 
                ></i>
                <Link to={{pathname:`/edit`,state:{contact:props.contact}}}>
                <i className="edit alternate icon" 
                        style={{fontSize:"22px" ,color:"blue",marginBottom:"7px", cursor:"pointer"}}
                        
                ></i>
                </Link>
                
                </div>
                
            </div>
    )

};

export default ContactCard;
