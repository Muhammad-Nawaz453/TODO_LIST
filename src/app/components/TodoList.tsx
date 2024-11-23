"use client"

import { todo } from 'node:test';
import { useState } from 'react'

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const TodoList = () => {
  const [ todos, setTodos ] = useState<Todo[]>([]);
  const [ inputValue, setInputValue ] = useState<string>("");
  
  //add Task
  const addTodo = () => {
    if(inputValue.trim() === "") return;
    setTodos([...todos,
        {id:Date.now(), task: inputValue, completed:false },

    ]);

    setInputValue("");
  };
    //Add values id:
  const toggleTodo = (id:number)=> {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo,completed: !todo.completed } :todo
      )

    )
};
//delete section
const deleteTodo = (id:number) => {
  setTodos(todos.filter((todo) => todo.id !==id));
};
return(
  <div className='flex flex-col min-h-screen'>
    <header className='bg-green-400 py-5 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-3xl font-serif underline'>Todo List</h1>
        <p className='font-serif mt-3 text-2xl'>
          {" "}
          Organise your work with  Todo List App</p>
      </div>
    </header>

    <main className='flex-grow flex items-center justify-center '>
       <div className='max-w-md mx-auto p-4 bg-green-300 rounded-lg shadow-md'>
        <div className='mb-4'>
          <div className='flex'>
            <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='flex-grow p-2 border border-red-400 rounded-lg bg-black'
            placeholder='Add a new task....'
            />
            <button
            onClick={addTodo}
            className='ml-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-green-500'>
            Add
            </button>
          </div>
        </div>
          <ul className='space-y-2'>
            {todos.map ((todo) => (
              <li key={todo.id}
              className={`flex items-center justify-between p-2 border border-slate-400 rounded-lg ${
                todo.completed ? "bg-lime-400 line-through" : "bg-red-300"
              }`} 

              >
                   <span>{todo.task}</span>

                   <div>
                    <button
                    onClick={() => toggleTodo(todo.id)}
                    className='px-2 py-1 text-sm bg-blue-400 rounded-lg hover:bg-gray-300'>
                    
                    {todo.completed ? "Undo" : "Complete"}
                    </button>

                    <button
                    onClick={() => deleteTodo(todo.id)}
                    className='px-2 py-1 text-sm bg-black rounded-lg hover:bg-gray-300'>
                    Delete
                    </button>
                   </div>
              </li>
            ))}
          </ul>
       </div>
    </main>
  </div>
);
}  ;   

export default TodoList