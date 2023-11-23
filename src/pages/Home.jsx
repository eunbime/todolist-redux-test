import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Container>
      <AddTodo />
      <TodoList done={false} />
      <TodoList done={true} />
      {isOpenModal && (
        <ModalContainer>
          <Modal>
            <h2>삭제하시겠습니까?</h2>
            <button>확인</button>
          </Modal>
        </ModalContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: gray;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: aliceblue;
`;

export default Home;
