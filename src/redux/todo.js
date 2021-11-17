import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [{ id: 1, text: "Hi there", isCompleted: false }],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
      console.log(state.todo);
    },
    removeTodo: (state, action) => {
      const index = state.todo
        .map((todo) => todo.id)
        .indexOf(action.payload.id);
      state.todo.splice(index, 1);
    },
    updateTodo: (state, action) => {
      console.log(action.payload);
      state.todo.map((todo) => {
        if (todo.id == action.payload.todo.id) {
          return (todo.text = action.payload.update);
        }
      });
    },
    toggleTodo: (state, action) => {
      state.todo.map((todo) => {
        if (todo.id == action.payload.id) {
          return (todo.isCompleted = !todo.isCompleted);
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } =
  TodoSlice.actions;
export default TodoSlice.reducer;
