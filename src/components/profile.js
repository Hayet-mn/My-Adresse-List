import React from 'react';
import profile from '../icons/profile.png';
import mail from '../icons/mail.png';
import phone from '../icons/phone.png';
import skype from '../icons/skype.png';
import { connect } from "react-redux";
import { Link } from "react-router-dom";





function Profile (props) {

    const user = props.users.filter(
        e => e.id === Number(props.match.params.id))[0];

    return <div className="profile"  >


            <div className="profileDesc">
            <div className="circle">
                <img src={profile}/>
            </div>

             <div >
         <p >{user.name}</p>
         <p> {user.phone}</p>
         </div>
         </div>

         <div className="icons">
         <img src={skype}/>
         <img src={phone}/>
         <img src={mail}/>

         </div>
        </div>
             
                 
                 
               
 
}

const mapStateToProps = state => ({
    users: state.users
  });
export default connect(mapStateToProps)(Profile);