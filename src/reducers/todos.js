import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, CLEAR_COMPLETED, ACTIVE_TODO, INACTIVE_TODO } from '../constants/ActionTypes'

const initialState = {
  todos: [{
    text: 'Complete Task',
    completed: false,
    id: 0,
    active: false
  }]
}

export default function todos(state = initialState, action) {
  switch (action.type) {

    case ADD_TODO: {
      const id = [...state.todos].reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      const todos = [...state.todos];
      return {
        ...state,
        todos: todos.concat([{
          id,
          completed: false,
          text: action.text,
          active: false,
          total: 0
        }])
      }
    }

    case COMPLETE_TODO: {
      return {
        ...state,
        todos: [...state.todos].map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
      }
    }

    case DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos].filter(todo => todo.id !== action.id)
      }
    }

    case CLEAR_COMPLETED: {
      return {
        ...state,
        todos: [...state.todos].filter(todo => todo.completed === false)
      }
    }

    case ACTIVE_TODO: {
      console.log(action);
      let  isActive = false;

      [...state.todos].some(todo => todo.active ? isActive=true : isActive=false);

      console.log('isActive: ',isActive);

      if(!isActive) {
        return {
          ...state,
          todos: [...state.todos].map(todo => todo.id === action.id ? { ...todo, active: true} : todo)
        }
      } else {
        console.log(state);
        return state;
      }
    }

    case INACTIVE_TODO:{
      console.log(action);

      return {
        ...state,
        todos: [...state.todos].map(todo => todo.id === action.id ? { ...todo, active: false} : todo)
      }
    }

    default:
      return state
  }
}
