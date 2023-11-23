import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleIsDone = (id) => {
    const isDone = todo.isDone;
    dispatch(switchTodo({ id, isDone }));
  };

  return (
    <Container>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.contents}</p>
        <ButtonBox>
          <button onClick={() => handleDelete(todo.id)}>삭제</button>
          <button onClick={() => handleIsDone(todo.id)}>
            {todo.isDone ? "취소" : "완료"}
          </button>
        </ButtonBox>
      </div>
      <button onClick={() => navigate(`/${todo.id}`)}>상세 페이지 이동</button>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #222;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default TodoItem;
