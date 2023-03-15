import React, { FC, useState } from "react";
import apiClient from "../../common/api";
import { useEffect } from "react";
import { IPost } from "../../common/models";
import "./PostsList.css";
import { Link } from "react-router-dom"

interface IProps {
  onClickPost: (id: number) => void;
}

const PostsList: FC<IProps> = (props) => {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      const res = await apiClient.get<IPost[]>("/posts");
      setPosts(res.data);
    } catch (e) {
      console.log({ e });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={() => props.onClickPost(post.id)}>View</button>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
