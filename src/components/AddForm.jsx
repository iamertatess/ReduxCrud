import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';
import { toast } from 'react-toastify';

const AddForm = () => {
  
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    const text = e.target[0].value.trim();

    
    if (!text) return toast.warn('Lütfen görev içeriğini belirleyin');

    
    const newTodo = {
      id: v4(), 
      text,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    
    dispatch(addTodo(newTodo));

   
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        placeholder="örn: typescript projesi"
        type="text"
        className="form-control"
      />

      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
