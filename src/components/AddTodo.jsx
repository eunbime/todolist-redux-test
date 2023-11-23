import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const AddTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      contents,
      isDone,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContents("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        name="title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="content"
        name="content"
        required
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default AddTodo;
