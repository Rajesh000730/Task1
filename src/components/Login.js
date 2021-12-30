import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import movies from '../components/movies.jpg'
import {
    Link
  } from "react-router-dom";

function Login() {
    return (
        <div className="w-full h-full bg-neutral-50 flex flex-col items-center justify-evenly bg-movies ">
            {/* <img src={movies} className="absolute"  /> */}
            <div className="w-[500px] h-[500px]  shadow-2xl  flex flex-col items-center justify-evenly bg-slate-50 z-2 position:relative left-[100px]">
                <h1 className="font-sans font-bold text-3xl underline underline-offset-8">Login</h1>
                <div className="flex flex-col items-center h-[200px] justify-evenly">
                   
                    <div><PersonIcon/>  <input className="p-2 text-xl font-sans focus:ring-violet-300" placeholder="Username"/></div>
                    <div><LockIcon/>  <input className="p-2 text-xl font-sans" placeholder="Password"/></div>
                    <Link to="/home"><Button variant="contained">Sign in</Button></Link> 
                </div>

                <div>
                    <Button><img src="https://img.icons8.com/color/30/000000/google-logo.png"/> <p className="font-sans">sign in with google</p></Button>
                    <Button><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/> <p className="font-sans">sign in with github</p></Button>
                </div>
            </div>
        </div>
    )
}

export default Login
