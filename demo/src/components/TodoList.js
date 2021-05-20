import React from 'react';
import uuid from 'react-uuid';
import '../style.css';
import Todo from '../components/Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (  
        <div className="todo-container">
            <ul className="todo-list">
                 {filteredTodos.map((todo)=> (
                    <Todo todos={todos} 
                    setTodos={setTodos}
                    todo={todo}
                    key={uuid()}
                    id={uuid} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
}
 
export default TodoList;
