import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "reactstrap";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./contexts/TodoContext";

const App = () => {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">TODO LIST</h1>
        <TodoContextProvider>
          <TodoForm />
          <TodoList />
        </TodoContextProvider>
      </Container>
    </div>
  );
};

export default App;
