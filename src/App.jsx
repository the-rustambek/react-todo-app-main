import React, { useState, useRef } from "react";
import "./App.css";
import Todo from "./Components/Todo/Todo.jsx";

function App() {
  const elModal = useRef(null);
  const elInput = useRef(null);

  const [todos, setTodos] = useState([
    { id: 0, title: "Jog around", isComplated: false },
    { id: 1, title: "Have a shower", isComplated: false },
  ]);

  const hendleRemoveTodo = (evt) => {
    const { id } = evt.target.dataset;

    const filteredTodos = todos.filter((row) => row.id !== Number(id));

    setTodos(filteredTodos);
  };

  const hendleCheckedTodo = (evt) => {
    const { id } = evt.target.dataset;

    const foundTodo = todos.find((row) => row.id === Number(id));
    foundTodo.isComplated = !foundTodo.isComplated;
    if (foundTodo.isComplated === true) {
      evt.target.closest("label").classList.add("checkbox");
    } else {
      evt.target.closest("label").classList.remove("checkbox");
    }
    console.log(foundTodo);
    // setTodos(foundTodo);
  };

  return (
    <>
      <h1 className="heading">Todos</h1>
      <div className="App">
        <input
          className="input_todo"
          type="text"
          placeholder="Yozib tashlang"
          ref={elInput}
          onKeyUp={(evt) => {
            if (evt.code === "Enter") {
              const newTodo = {
                id: todos[todos.length - 1]?.id + 1 || 0,
                title: evt.target.value.trim(),
                isComplated: false,
              };

              setTodos([...todos, newTodo]);
              evt.target.value = null;
            }
          }}
        />
        <button
          className="button"
          onClick={() => {
            const newTodo = {
              id: todos[todos.length - 1]?.id + 1 || 0,
              title: elInput.current.value.trim(),
              isComplated: false,
            };

            setTodos([...todos, newTodo]);
            elInput.current.value = null;
          }}>
          Bosib tashlang
        </button>
        <ul className="todo_list">
          {todos.length > 0 &&
            todos.map((row) => {
              return (
                <Todo
                  key={row.id}
                  title={row.title}
                  id={row.id}
                  isComplated={row.isComplated}
                  removeTodo={hendleRemoveTodo}
                  checkedTodo={hendleCheckedTodo}
                />
              );
            })}
        </ul>
      </div>
      <button
        className="modalka"
        onClick={() => {
          elModal.current.classList.add("modal_active");
        }}>
        More
      </button>
      {/* **********************Modalka */}
      <div className="modal" ref={elModal}>
        <div className="modal_inner">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            ea officia. Cumque quis odio vitae possimus ipsum soluta quibusdam
            inventore!
          </p>
          <button
            className="modal_close_btn"
            onClick={() => {
              elModal.current.classList.remove("modal_active");
            }}>
            &times;
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
