import React from "react";
import { connect } from "react-redux";
import { searchName } from "../actions";
import loup from '../icons/loupe.png';

import { Link } from "react-router-dom";


const navSearch = props => {
  return (
    <div className="navSearch">

      <input 
        type="text"
        placeholder="Search ..."
        onChange={e => {
          props.searchedName(e.target.value);
        }}
      />

     
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    searchedName: name => dispatch(searchName(name))
  };
};

export default connect(null, mapDispatchToProps)(navSearch);
