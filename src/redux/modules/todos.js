const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const SWITCH_TODO = "todos/SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

const initialState = [
  {
    id: 1,
    title: "할일 1",
    contents: "내용 1",
    isDone: false,
  },
  {
    id: 2,
    title: "할일 2",
    contents: "내용 2",
    isDone: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      return [newTodo, ...state];
    case DELETE_TODO:
      const todoId = action.payload;
      return state.filter((item) => item.id !== todoId);
    case SWITCH_TODO:
      const { id, isDone } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, isDone: !isDone } : item
      );
    default:
      return state;
  }
};

export default todos;
