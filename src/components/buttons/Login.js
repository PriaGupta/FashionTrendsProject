import React,{useState,useEffect} from 'react'
import './style1.css';

import Cookie from 'js-cookie'
import {useNavigate} from 'react-router-dom'
const Login = () => {
//    const navigate=useNavigate()
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Email:', email);
//         console.log('Password:', password);

//    Cookie.set('email',email)
//    Cookie.set('pass',password)

//    setTimeout(() => {
//     navigate('/')
//    }, 2000);
//         // if(email=='admin' && password=='admim123'){
//         //     ('/')
//         // }
//         // localStorage.setItem('email', email);
//         // localStorage.setItem('password', password);
      
//     }
    

  return (
    <>
      <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className="fa fa-sign-in me-1"></span> Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-google me-2"></span> Sign in With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                            </button>
                            <form
                            //  onSubmit={handleSubmit}
                             >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" 
                                        // onChange={handleEmailChange} 
                                        className="form-text" 
                                        // value={email}
                                        >We'll never share your email with anyone else.</div>
  </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" 
                                        // onChange={handlePasswordChange} 
                                        className="form-control" id="exampleInputPassword1" 
                                        // value={password}
                                        />
  </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
                                            <button type="submit"  className="btn btn-outline-primary w-100 mt-5">Submit</button>
</form>
                                    </div>
                                </div>
                </div>
                        </div>
    </>
  )
}

export default Login
