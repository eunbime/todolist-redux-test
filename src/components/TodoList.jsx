import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoList = ({ done }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <Container>
      <h2> {done ? "DoneList" : "TodoList"}</h2>
      {todos
        .filter((item) => {
          return item.isDone === done;
        })
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

export default TodoList;
