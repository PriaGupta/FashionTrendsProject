import React,{useState} from 'react'
// import './login.css'
import Cookie from 'js-cookie';
import {useNavigate} from 'react-router-dom'
const Login = () => {

    const navigate=useNavigate();
    const [username, setname] = useState('');
    const [password, setPassword] = useState('');

    const handlenameChange = (event) => {
        setname(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('name:', username);
        console.log('Password:', password);

        Cookie.set('name',username)
        Cookie.set('pass',password)

   setTimeout(() => {
    navigate('/') 
   }, 2000);
    }
  return (
    <>
        

<div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">Login</h3>
          </div>
          <div class="card-body">
            <form className="formsubmit border-0" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" value={username} onChange={handlenameChange} placeholder="Enter username"/>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" value={password} onChange={handlePasswordChange} placeholder="Enter password"/>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Login
