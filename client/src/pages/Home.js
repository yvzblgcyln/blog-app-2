import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  return (
    <div className="home">
      <div className="container">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="post-text">
              <h1>{post.title}</h1>
              <div>{post.desc}</div>
              <Link to={`/post/${post.id}`}>
                <button>Read more</button>
              </Link>
            </div>
            <div className="img">
              <img src={post.img} className="blog-cover"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
