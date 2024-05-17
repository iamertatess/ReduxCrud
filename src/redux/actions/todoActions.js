import ActionTypes from '../actionTypes';


export const addTodo = (payload) => {
  return { type: ActionTypes.ADD, payload };
};

export const deleteTodo = (payload) => ({
  type: ActionTypes.DELETE,
  payload,
});

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE,
  payload,
});
