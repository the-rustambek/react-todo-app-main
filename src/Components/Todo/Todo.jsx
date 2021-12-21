function Todo({ id, title, checkedTodo, removeTodo }) {
  return (
    <li className="todo_item">
      <label className="check">
        <input
          type="checkbox"
          data-id={id}
          onClick={(evt) => checkedTodo(evt)}
        />
        {title}
      </label>
      <button
        className="delete"
        data-id={id}
        onClick={(evt) => removeTodo(evt)}>
        Delete
      </button>
    </li>
  );
}

export default Todo;
