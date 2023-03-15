import React, {  useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import apiClient from "../common/api";

const HelpPage = () => {
    const {postId} = useParams<string>();
    const [post, setPost] = useState({})
    const navigate = useNavigate();

    console.log(navigate);
    
    
    const getPost = async (id: number) => {
        const res = await apiClient.get(`/posts/${id}`)
        setPost(res.data)
    };

    useEffect(() => {
        if(postId) {
            const id = parseInt(postId)
            !isNaN(id) && getPost(id)
        }
    }, [postId])

    return (
        <div>
            <button onClick={() => navigate("/posts")}>Back</button>
            <h1>HelpPage</h1>
            {/* @ts-ignore */}
            <h2>{post.title}</h2>
        </div>
    )
}

export default HelpPage;
