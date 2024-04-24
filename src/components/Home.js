import React from "react"
import {useLocation, useNavigate, Link} from 'react-router-dom';

function Home (){
    

    return (
        <div className="homepage">

            <h1>Hello and welcome to the home</h1>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/register">Register Page</Link>
            <br />
            <Link to="/">Language Selector Page</Link>

        </div>
    )
}

export default Home