

import ActionTypes from '../actionTypes';
import { toast } from 'react-toastify';

const initialState = {
  todos: [
    {
      id: '0b3c3963-a7b0-42d0-9c35-464f72d70d37',
      text: 'javascript öğren',
      is_done: true,
      created_at: '20.04.2024',
    },
    {
      id: '87a6dece-3862-4e5c-9a8d-3f57d06fea6a',
      text: 'react projesi yap',
      is_done: false,
      created_at: '20.04.2024',
    },
    {
      id: 'd89679bd-a2c9-4b65-b914-a818a5cc0459',
      text: 'typescript çalış',
      is_done: false,
      created_at: '20.04.2024',
    },
  ],
};

const todoReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case ActionTypes.ADD:
      toast.success('Görev başarıyla eklendi');

      return { todos: state.todos.concat(action.payload) };

    case ActionTypes.DELETE:
      
      const filtred = state.todos.filter((i) => i.id !== action.payload);

      toast.error('Görev listeden kaldırıldı');

      return { todos: filtred };

    case ActionTypes.UPDATE:
      
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      toast.info('Görev başarıyla güncellendi');

      return { todos: updated };

    default:
      return state;
  }
};

export default todoReducer;
