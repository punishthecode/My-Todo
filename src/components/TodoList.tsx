import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos?: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onAddTodo: (text: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos = [],
  onToggle,
  onDelete,
  onAddTodo,
}) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      onAddTodo(newTodoText);
      setNewTodoText("");
    }
  };

  return (
    <Box width="40%">
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} disablePadding>
            <Checkbox
              edge="start"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              disableRipple
            />
            <ListItemText
              primary={todo.text}
              style={todo.completed ? { textDecoration: "line-through" } : {}}
            />
            <IconButton onClick={() => onDelete(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Box display="flex" alignItems="center">
        <TextField
          label="Add Todo"
          variant="outlined"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <Box paddingLeft="20px">
          <IconButton onClick={handleAddTodo}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TodoList;
