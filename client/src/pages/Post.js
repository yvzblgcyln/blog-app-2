import React, { useEffect, useState } from "react";
import Suggestions from "../components/Suggestions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Post() {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  console.log(postId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/http://localhost:8800/api/posts/:${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  return (
    <div className="post">
      <div className="container">
        {post.length}
        {post.length &&
          post.map((post) => (
            <div className="blog" key={post.id}>
              <img src={post.img}></img>
              <h1>{post.title}</h1>
              <div className="user">
                <img src={post.img} className="pic"></img>
                <div className="text">
                  <div className="name">Yavuz Bilge Ceylan</div>
                  <div className="time">2m ago</div>
                </div>
                <div className="control">
                  <Link to={`/add?edit=${post.id}`}>
                    <button>edit post</button>
                  </Link>
                  <button>delete</button>
                </div>
              </div>
              <div className="desc">{post.desc}</div>
            </div>
          ))}
        <Suggestions />
      </div>
    </div>
  );
}

export default Post;
