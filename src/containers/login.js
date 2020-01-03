import React from 'react';
import LoginView from '../components/loginView';
import  config from '../constants/config';
import axios from "axios";

export class Login extends React.Component {

    componentDidMount() {
      var data = {email : "justin.cse@gmail.com", password : "justin123"};
    let res =  axios.get(
          'https://jsonplaceholder.typicode.com/users'
    ).then((res)=>{
        //on success
        return this.success(res);
        console.log("###res",res);
    }).catch((error)=>{
        //on error
        console.log("###error",error);
    })
  }
  
  success = response =>{
      console.log("###response",response);
  }

  render() {
    return (
      <LoginView
      />
    );
  }
  
}

export default Login