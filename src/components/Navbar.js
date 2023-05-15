/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const onPress = () => {
        navigate('/login')
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Home</a></li>
                        <li><Link to="/listpokemons">Daftar Pokemon</Link></li>
                        <li><a href='/mypokemons'>My Pokemons</a></li>
                        
                    </ul>
                </div>
                <a className="font-bold normal-case text-xl">PokeDex</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/listpokemons">Daftar Pokemon</Link></li>
                    <li><a href='/mypokemons'>My Pokemons</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={onPress} className="btn mr-1">Login</button>
            </div>
        </div>
    )
}
