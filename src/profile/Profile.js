import React from "react";
import PropTypes from 'prop-types';

const Profile = (props) => {
  return (
    <div>
      <h1 style={{color:"red"}}>Name : {props.FullName}</h1>
      <h1 style={{color:"green"}}>Bio : {props.bio}</h1>
      <h1 style={{color:"blue"}}>Profession : {props.profession}</h1>
      {props.children}
      <br/>
      <button onClick={()=>props.handleName(props.FullName)}>Click to check My Name

      </button>
     
    </div>
  );
};
Profile.defaultProps = {
   
  FullName: "Rahul",
  bio: "I'm an investor",
  profession: "investor",
  handleName: ()=>alert("No handleName Function")
  
}
Profile.propTypes  ={
  FullName: PropTypes.string,
  bio: PropTypes.string,
  props: PropTypes.string,
  handleName: PropTypes.func

}
export default Profile;
