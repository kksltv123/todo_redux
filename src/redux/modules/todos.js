import { createSlice } from '@reduxjs/toolkit';

// Action value
// const ADD_TODO = "ADD_TODO";
// const TOGGLE = "TOGGLE";
// const REMOVE = "REMOVE";
// const GET_TODO_BY_ID = "GET_TODO_BY_ID";

// // Action Creator
// export const addTodo = text => ({
//   type: ADD_TODO,
//   text
// });
// export const toggle = id => ({
//   type: TOGGLE,
//   id
// })
// export const remove = id => ({
//   type: REMOVE,
//   id
// })
// // 상세 페이지에서 특정 Todo만 조회하는 action creator
// export const getTodoByID = id => ({
//     type: GET_TODO_BY_ID,
//     id,
// });


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

// Reducer
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.text],
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map(todo =>
//           todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
//         )
//       }
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.id)
//       };
//     case GET_TODO_BY_ID:
//       return {
//         ...state,
//         todo: state.todos.find((todo) => {
//           return todo.id === action.id;
//         }),
//       };
//     default:
//       return state;
//   }
// };


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