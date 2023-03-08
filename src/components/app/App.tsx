import React from "react"
import { Link, Outlet, Route, Routes } from "react-router-dom"
import { ErrorPage } from "../../common/error/error"
import { NotFound } from "../../common/not-found/NotFound"
import { Auth, SignIn, SignUp } from "../auth/Auth"

import { Home } from "../home/Home"
import { Profile } from "../profile/Profile"
import './App.css'


export const App = () => {
    return(
    <div className='wrapper'>
        <header className='header'>
            <div className='header-content container'>
                <div>
                    <Link className='header__link' to='home'>Home</Link>
                    <Link className='header__link' to='posts'>Posts</Link>
                    <Link className='header__link' to='profile/1'>Profile</Link>
                    <Link className='header__link' to='jojo'>Jojo</Link>
                    <Link className='header__link' to='signup'>Sign up</Link>
                    <Link className='header__link' to='signin'>Sign in</Link>
                </div>
                <div>
                    Header 2
                </div>
            </div>
        </header>
        <div className='container'>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="signup" element={<Auth component={SignUp}/>}/>
                <Route path="signin" element={<Auth component={SignIn}/>}/>
                <Route path="profile/:profileId" element={<Profile />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </div>  
    </div>
    )
}