import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../constants';

export const addToDo = (id, text, isCompleted) => ({
  type: ADD_TODO,
  id,
  text,
  isCompleted
});

export const deleteToDo = id => ({
  type: DELETE_TODO,
  id
});

export const completeToDo = id => ({
  type: COMPLETE_TODO,
  id
});