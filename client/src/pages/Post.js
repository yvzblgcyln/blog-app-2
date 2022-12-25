import React from "react";
import Suggestions from "../components/Suggestions";
import { Link } from "react-router-dom";

function Post() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="post">
      <div className="container">
        {posts.map((post) => (
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
