import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function AddPost() {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="container">
        <div className="write-area">
          <input type="text" placeholder="Title" />
          <div className="editorContainer">
            <ReactQuill className="editor" theme="snow" value={value} />
          </div>
        </div>
        <div className="publish-area">
          <div className="file">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input type="file" id="upload" hidden />
            <label for="upload" className="upload">
              Choose file
            </label>
            <div className="buttons">
              <button>Save draft</button>
              <button>Update</button>
            </div>
            <div className="category">
              <h1>Category</h1>
              <div className="cat">
                <input type="radio" />
                <label>Art</label>
              </div>
              <div className="cat">
                <input type="radio" />
                <label>Science</label>
              </div>
              <div className="cat">
                <input type="radio" />
                <label>Technology</label>
              </div>
              <div className="cat">
                <input type="radio" />
                <label>Cinema</label>
              </div>
              <div className="cat">
                <input type="radio" />
                <label>Design</label>
              </div>
              <div className="cat">
                <input type="radio" />
                <label>Food</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
