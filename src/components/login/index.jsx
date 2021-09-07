import React, { useState } from "react";
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

const Login = ()=>  {

    const [form,setForm] = useState({
        username : '',
        password : '',

    })
    const [formErrors,setFormErrors] = useState({
        usernameError : '',
        passwordError : ''
    })
    const loginData = useSelector(state => state.loginData);
    console.log(loginData)
 
     
   const handleOnChange = (event)=>{
     const {name,value} = event.target;
      setForm({...form,[name]:value});
      console.log(form)
    }

    const validateTheForm = ()=>{
        let usernameError = '';
        let passwordError = '';
        if(form.username.length<4){
            usernameError = "User name should be minimum 4 letters";
        }
        
        if(form.password.length<6){
            passwordError = "Please Enter your password";
        }
        if(usernameError || passwordError){
            setFormErrors({...formErrors,usernameError,passwordError})
            return false;
        }
        return true;
    }
        const history=useHistory();
        const handleSubmit = (event)=>{
        event.preventDefault();
        const isValid =   validateTheForm()
    //    alert(isValid)
       if(isValid && form.username == loginData.username && form.password == loginData.password){
        history.push('/EmployeeList')
       }
       else{
           alert('use correct userName');
       }
       
    }
        return (
    
            <form onSubmit={handleSubmit}>
                
                <h3>Log in</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="email" name="username" className="form-control" placeholder="Enter email"  onChange={handleOnChange} />
                     <p className="text-danger">{formErrors.usernameError}</p>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={handleOnChange} />
                     <p className="text-danger">{formErrors.passwordError}</p>

                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
           
        );
    }

export default Login;