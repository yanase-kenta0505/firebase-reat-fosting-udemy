import React, { useState } from "react";
import { Button, Form, Input, InputGroup } from "reactstrap";

const TodoForm = ({addTodo}) => {
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
