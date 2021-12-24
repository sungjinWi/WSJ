import { createStore } from 'redux';

// Redux에서 관리할 state 정의

const initialState = {
  counter: 0,
  text:'',
  list: []
};

/*
  Action Type define.
  Action Type definition Uppercase
*/

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// Create Action function
function increase() {
  return {
    type: INCREASE // Action must need type
  };
}

const decrease = () => ({
    type: DECREASE
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
});

/*
  Make Reducer Function
*/

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item) //다시 붙혀넣는것
      };
    default:
      return state; //이전 state
  }
}

// Make Store
const store = createStore(reducer); //reducer로 인해 상태변환이 되는데 Store로 인해 실행된다

console.log(store.getState()); // Currently store state

// Store 안에 들어있는 state가 바뀔때마다 호출되는 listener function
const listener =  () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.unsubscribe(listener); //구독 해지

// Action dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText());
store.dispatch(addToList({id: 1, text: 'WOW'}));
