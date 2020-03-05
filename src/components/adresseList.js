import React, { Component } from "react";
import { connect } from "react-redux";
import profile from '../icons/profile.png';
import NavSearch from './navSearch';
import {Link} from 'react-router-dom';


import './components.css'


class adresseList extends Component {
  render() {
    let users = this.props.users;

    return (<div class="container">
        
      <div className="adressList" >
          
          <NavSearch/>
          <div className="usersList" >
        {users
        .filter(
            e =>
              e.name
                .toLowerCase()
                .includes(this.props.nameSearch.toLowerCase()) 
          )
         
          .map((el, i) => (
          
            <div className="userCard" >
               
            <Link to={`/profile/${el.id}`}>
            <div className="circle" >
            <img src={profile}/>
            </div>
            </Link>

           <div >
           <p >{el.name}</p>
            <p> {el.phone}</p>
           </div>
         </div>
        
             
          ))}
      </div></div></div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    nameSearch: state.inputSearch,
    
  };
};


export default connect(mapStateToProps, null)(adresseList);