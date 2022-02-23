import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "reactstrap";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, complete: false }];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
    console.log(newTodos);
  };

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">TODO LIST</h1>
        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      </Container>
    </div>
  );
};

export default App;
