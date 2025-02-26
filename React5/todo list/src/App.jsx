import { useState } from 'react';
import './App.css'
import Addtodo from './components/Addtodo/Addtodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [list, setList] = useState([
    {id: 1, todoData: 'todo data 1', finished: false},
    {id: 2, todoData: 'todo data 2', finished: false}

]);

  return (
   <>
      <Addtodo updateList={(todo) => setList([...list, {id: list.length + 1, todoData: todo, finished: false}])} />
      <TodoList list={list} />
   </>
  );
}

export default App
