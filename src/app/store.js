import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/posts/postSlice";
import usersSlice from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    posts: postSlice,
    users: usersSlice,
  },
});
export default store;
