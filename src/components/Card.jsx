import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from './Modal';
import ActionTypes from '../redux/actionTypes';
import { deleteTodo, updateTodo } from '../redux/actions/todoActions';

const Card = ({ todo }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  
  const dispatch = useDispatch();

  
  const handleDelete = () => {
   
    if (!confirm('Silmek istediğinizden emin misniz?')) return;

    dispatch(deleteTodo(todo.id));
  };

  
  const handleStatus = () => {
    
    const updated = { ...todo, is_done: !todo.is_done };

   
    dispatch(updateTodo(updated));
  };

  return (
    <div className="border shadow-lg p-4 my-5 rounded">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor'}</h6>
      <p>{todo.created_at}</p>

      <button onClick={() => setIsOpen(true)} className="bg-primary">
        Düzenle
      </button>

      <button onClick={handleStatus} className="bg-success mx-5">
        {todo.is_done ? 'Geri Al' : 'Tamamla'}
      </button>

      <button onClick={handleDelete} className="bg-danger">
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;
