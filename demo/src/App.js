import React,{useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './style.css';

function App() {
  
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use effect
  useEffect(() => {
    filterHandler();
  },[todos, status] );


  // functions
 const filterHandler = () => {
   switch(status){
     case 'completed': 
     setFilteredTodos(todos.filter(todo => todo.completed === true))
     break;
     case 'uncompleted': 
     setFilteredTodos(todos.filter(todo => todo.completed === false))
     break;
     default:
       setFilteredTodos(todos);
       break;

   }
 }


  return (

    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
      setTodos = {setTodos}
      todos = {todos}
      inputText = {inputText}
      setInputText={setInputText}
      setStatus={setStatus}
      
      ></Form>
      <TodoList 
      filteredTodos={filteredTodos}
      setTodos={setTodos}
      todos={todos}>

      </TodoList>
    </div>
  );
}

export default App;
