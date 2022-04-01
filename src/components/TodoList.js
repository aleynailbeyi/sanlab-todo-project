import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

//todo ekleme fonksiyonu
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );
  };

 //todo silme fonksiyonu
  const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id);

      setTodos(removeArr);
  };

  //todo'nun tamamlanıp tamamlanmadığını kontrol eder.
  const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if(todo.id === id) {
              todo.isComplete = !todo.isComplete;
          }
          return todo;
      });
      setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Bugün için planın nedir?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default TodoList;

