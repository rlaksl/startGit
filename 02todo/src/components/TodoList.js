import React from "react";
import TodoItem from './TodoItem';

function TodoList ({todos, toggleComplete, deleteTodo, updateTodo}) {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-list">할 일이 없습니다. 새로운 할 일을 추가해보세요</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))
      )}
    </ul>
  );
}
export default TodoList;