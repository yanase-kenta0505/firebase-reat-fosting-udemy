import React, { useState,useContext } from "react";
import { Button, Form, Input, InputGroup } from "reactstrap";
import { TodosContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const {addTodo} = useContext(TodosContext)

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" color="success">
          追加
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TodoForm;
