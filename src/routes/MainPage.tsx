import React from 'react'
import { Link, Outlet, useLocation  } from "react-router-dom"

const MainPage = () => {
    const location = useLocation();

    console.log({location});
    
    return (
        <>
        <header className='df jc-sa'>
            <Link to='/'><b> Main </b></Link> <br />
            <Link to='/posts'> <b> Entrance </b></Link>
        </header>
        <div>
            <h1 className='df jc-c'>Main Page</h1>
        </div>
        </>
    )
}

export default MainPage
