import { createSlice } from '@reduxjs/toolkit';



// initial State
const initialState = {
  todos: [
    {
      id: "detail1",
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false
    },
    {
      id: "detail2",
      title: "점심 먹기",
      body: "점심 뭐먹지...?",
      isDone: true
    },
  ],
  todo: 
  {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  }
};



const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    ADD_TODO:(state, action) => {
      state.todos.push(action.payload)
    },
    TOGGLE(state, action){
      state.todos = state.todos.map(todo =>
         todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      )
    },
    REMOVE(state, action){
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    GET_TODO_BY_ID(state, action){
      state.todo = state.todos.find((todo) => {
        return todo.id === action.payload;
      })
    }
  } 
})

// export default todos;
export const todosActions = todosSlice.actions;
export default todosSlice.reducer;