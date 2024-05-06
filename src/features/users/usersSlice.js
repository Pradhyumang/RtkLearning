import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  { id: "1", name: "Title 1 Pradhy" },
  { id: "2", name: "Title 2 Amul" },
];
const postsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
          },
        };
      },
    },
  },
});
export const selectAllUsers = (state) => state.users;

export default postsSlice.reducer;
export const { postAdded } = postsSlice.actions;
