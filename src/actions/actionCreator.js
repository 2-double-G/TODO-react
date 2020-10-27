import { ADD_TODO } from '../constants';

export const addToDo = (id, text, isCompleted) => ({
  type: ADD_TODO,
  id,
  text,
  isCompleted
});
