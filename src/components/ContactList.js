import React,{useRef} from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList =(props)=>{
  //  console.log(props);
  const inputEl=useRef("");
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };

    const renderContactList=props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    });


    const getSearchTerm=()=>{
        props.searchKeyword(inputEl.current.value);
    }

    return(
        <div className="main">
            <h2 style={{marginTop:"65px"}}>Contact List 
                <Link to="/add"><button style={{marginLeft:"50px"}} className="ui button blue">ADD CONTACT</button></Link>
            </h2>

            <div style={{width:"50%"}} className="ui card centered">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="search Contacts" className="prompt" value={props.term} onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
            
            <div className="ui celled list">
            {renderContactList.length>0?renderContactList: <h2 style={{textAlign:"center"}}>No Contacts!!!</h2>}
        </div>
        </div>
        
    );
};

export default ContactList;