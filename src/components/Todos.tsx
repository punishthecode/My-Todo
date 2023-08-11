import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { Box, Typography } from "@mui/material";
import DateComponent from "./DateComponent";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const storedTodos = sessionStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    sessionStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.completed != false))
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    sessionStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  };

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    sessionStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  return (
    <Box>
      <Typography variant="h4">Todo App</Typography>
      <DateComponent />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onAddTodo={handleAddTodo}
      />
    </Box>
  );
};

export default Todos;
