// src/components/TodoMain.js
import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoStats from './TodoStats';

function TodoMain({ todos, addTodo, toggleComplete, deleteTodo, updateTodo, isLoading }) {
  return (
    <main className="todo-container">
      <TodoForm addTodo={addTodo} />
      <TodoStats todos={todos} />
      {isLoading ? (
        <p className="loading">로딩 중...</p>
      ) : (
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo} 
        />
      )}
    </main>
  );
}

export default TodoMain;