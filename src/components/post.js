import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Post = (props) => {
  const [post, setPost] = useState({});

  const location = useLocation()
  const { id } = location.state

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(`https://blog-frontend-b4d.pages.dev/apis/${id}`);
    // const resp = await fetch(`https://worker-backend.aruneel-das4992.workers.dev/api/posts/1`);
      const postResp = await resp.json();
      setPost(postResp);
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length) return <div />;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <p>
        <em>Published {new Date(post.published_at).toLocaleString()}</em>
      </p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Post;
