import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand ml-5" to="/">Alphagram</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">

                    <ul class="navbar-nav" style={{ marginLeft: '80%' }}>

                        <li class="nav-item" >
                            <Link class="nav-link" to="/Login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default Navbar