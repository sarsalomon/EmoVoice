import axios from 'axios';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import rasm from "../rasm2.png"


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const loginUser = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
            localStorage.setItem("user", JSON.stringify(res.data))
            window.location.replace("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img className='w-100' src={rasm} alt="" />
                    </div>
                    <div className="col-md-6 py-5 my-5 px-5">
                        <div className=''>
                            <h2 style={{
                                fontWeight: "700"
                            }}>Login to EmoVoice</h2>
                            <p>
                                <Link style={{
                                    textAlign: "left"
                                }} to="/regis">
                                    you are not accaunt <span className='text-primary'>Registration</span>
                                </Link>
                            </p>
                        </div>

                        <div>
                            <div className='my-2'>
                                <label htmlFor="email" style={{
                                    fontWeight: "600",
                                    fontSize: "18px"
                                }}>E-mail</label> <br />
                                <div className='form-input-registration my-1'>
                                    <input ref={emailRef} className='form-input-regis' type="email" placeholder='name@gmail.com' name="" id="email" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill text-muted" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='my-4'>
                                <label htmlFor="password" style={{
                                    fontWeight: "600",
                                    fontSize: "18px"
                                }}>Password</label> <br />
                                <div className='form-input-registration my-1'>
                                    <input ref={passwordRef} className='form-input-regis' type="password" placeholder='password' name="" id="password" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-shield-fill-exclamation text-muted" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.55 8.502L7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0zM8.002 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                    </svg>
                                </div>
                            </div>
                            <button style={{
                                fontSize: "22px",
                                fontWeight: "600"
                            }} onClick={loginUser} className='w-100 btn btn-primary py-2 shadow-none'>Login in</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;