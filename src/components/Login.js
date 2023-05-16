/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState }  from 'react'
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://reqres.in/api/login", { email, password })
          .then((response) => {
            localStorage.setItem("authToken", true);
            window.location.href = "/"
          })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("../img/bg.jpg")` }} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} method='post'>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" value={password} onChange={handlePasswordChange} />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Belum Bisa Login ya?{' '}
                                <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Daftar Dulu sini
                                </a>
                            </p>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
