import * as types from '../constants/ActionTypes'

export const addTodo = text => ({
  type: types.ADD_TODO, text
});

export const completeTodo = id => ({
  type: types.COMPLETE_TODO, id
});

export const deleteTodo = id => ({
  type: types.DELETE_TODO, id
});

export const clearCompleted = () => ({
  type: types.CLEAR_COMPLETED
});

export const activeTodo = id => ({
  type: types.ACTIVE_TODO, id
})

export const inactiveTodo = id => ({
  type: types.INACTIVE_TODO, id
})
