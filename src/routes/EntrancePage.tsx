import React, { useState } from "react";
import { PostsList } from '../components/index';
import { Outlet, useNavigate, Link } from "react-router-dom"


const EntrancePage = () => {

    const [postId, setPostId] = useState(0);
    const navigate = useNavigate()

    const onClickPost = (id: number) => {
        setPostId(id);
        navigate(`/posts/${id}`)
    };

    return (
        <div className="App">
            <header className='df jc-sa'>
                <Link to='/'><b> Main </b></Link> <br />
                <Link to='/posts'> <b> Entrance </b></Link>
            </header>
            <h1 className='df jc-c'>Entrance Page</h1>
            <div className="container">
                <div>
                    <PostsList onClickPost={onClickPost} />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default EntrancePage
