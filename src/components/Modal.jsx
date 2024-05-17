import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE } from '../redux/actionTypes';
import { updateTodo } from '../redux/actions/todoActions';

const Modal = ({ todo, close }) => {
  
  const dispatch = useDispatch();

  
  const inputRef = useRef();

  const save = () => {
    
    const newText = inputRef.current.value;

    
    const newTodo = { ...todo, text: newText };

   
    dispatch(updateTodo(newTodo));

    
    close();
  };

  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Güncelle</h5>
            <button
              onClick={close}
              type="button"
              className="btn-close"
            ></button>
          </div>

          <div className="modal-body">
            <label>Yeni Başlık</label>
            <input
              ref={inputRef}
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>

          <div className="modal-footer">
            <button onClick={save} type="button" className="btn btn-primary">
              Kaydet
            </button>
            <button onClick={close} type="button" className="btn btn-secondary">
              İptal Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
