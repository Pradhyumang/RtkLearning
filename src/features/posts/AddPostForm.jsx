import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const addClick = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId)); //{ id: nanoid(), title: title, content: content }));
    }
  };
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <>
      <div>
        Form
        <br />
        Title :
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        Content :
        <textarea
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        {/* userID :{" "}
        <input
          type="text"
          value={userId}
         
        /> */}
        <br />
        <label htmlFor="postAuthor">Author</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {userOptions}
        </select>
        <br />
        <input
          type="button"
          value="Add"
          onClick={addClick}
          disabled={!canSave}
        />
      </div>
    </>
  );
};

export default AddPostForm;
