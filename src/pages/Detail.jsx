import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteTodo } from "../redux/modules/todos";
import styled from "styled-components";

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const filteredTodo = todos.filter((item) => item.id === parseInt(params.id));

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    navigate("/");
  };

  return (
    <Container>
      {filteredTodo.map((todo) => (
        <div key={todo.id}>
          <div>
            <h2>{todo.title}</h2>
            <h4>{todo.contents}</h4>
            <span>{todo.isDone.toString()}</span>
          </div>
          <button onClick={() => handleDelete(todo.id)}>삭제</button>
        </div>
      ))}
      <button onClick={() => navigate("/")}>이전으로 이동</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export default Detail;
