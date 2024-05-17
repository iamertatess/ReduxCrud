import { useSelector } from 'react-redux';
import Card from './Card';

const ListTodos = () => {
  
  const todoState = useSelector((store) => store.todoReducer);

  return (
    <div>
      {todoState.todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
