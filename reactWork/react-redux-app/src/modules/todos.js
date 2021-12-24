// action type definition
const ADD_TODO = 'todo/ADD_TODO';
const TOGGLE_TODO = 'todo/TOGGLE_TODO';

// action create function definition
let nextId = 1; //todo data unique id
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // add new item +1 to nextId
    text
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

// initial state definition
// reducer 초기 상태는 꼭 object type일 필요 없음
// array, number, string, boolean 이어도 된다

const initialState = [
  /*
    다음과 같은 object를 배열에 넣을 것이고 빈배열로 놓는다
    {
      id: 1,
      text: 'example',
      done: false
    }
  */ 
];

export default function todos(state=initialState, action) { //reducer
  switch(action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id // id가 일치하면
            ? {...todo, done: !todo.done } //done 값 toggle
            : todo
      );
    default:
      return state;
  }
}