import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../posts/postsSlice";

const AddPostForm = (prps) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const dispatch = useDispatch();

  const newPost = (e) => {
    e.preventDefault();
    dispatch(addPost(title, content));
  };

  return (
    <section>
      <h2>Add Post</h2>
      <form onSubmit={newPost}>
        <label htmlFor="postTitle">PostTitle</label>
        <input
          name="postTitle"
          type="text"
          id="posttitle"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Post Content</label>
        <input
          name="postContent"
          type="text"
          id="postContent"
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" value={"Save"} />
      </form>
    </section>
  );
};

export default AddPostForm;
