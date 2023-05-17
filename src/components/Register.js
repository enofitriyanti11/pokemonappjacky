/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Register() {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("../img/bg.jpg")` }} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Account</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-primaryColor">
                        <div className="card-body">
                        <h1 className='text-center font-bold text-base-100'>Register Account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base-100">Username</span>
                                </label>
                                <input type="text" placeholder="Username" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base-100">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base-100">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-base-100">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary border-0 bg-thirdColor hover:bg-fourthColor hover:text-neutral-900">Daftar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
