import React from "react";
import { Button, Table } from "reactstrap";

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <Table>
      <tbody>
        {todos &&
          todos.map((todo, index) => {
            return (
              <React.Fragment key={index}>
                <tr>
                  <th style={{ textAlign: "left" }}>{todo.text}</th>
                  <td style={{ textAlign: "right" }}>
                    <Button
                      color={todo.complete ? "secondary" : "success"}
                      className="me-2"
                      onClick={() => completeTodo(index)}
                    >
                      {todo.complete ? "完了" : "未完了"}
                    </Button>

                    <Button color="danger" onClick={() => removeTodo(index)}>
                      削除
                    </Button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
      </tbody>
    </Table>
  );
};

export default TodoList;
