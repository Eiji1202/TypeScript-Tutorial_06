import React, { useState } from "react";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";
import { TodoType } from "./todo.model";

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text: text }]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
