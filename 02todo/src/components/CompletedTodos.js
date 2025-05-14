// src/components/CompletedTodos.js
import React from 'react';
import TodoList from './TodoList';
import TodoStats from './TodoStats';

function CompletedTodos({ todos, toggleComplete, deleteTodo, updateTodo, isLoading }) {
  return (
    <main className="todo-container">
      <h2>완료된 할 일 목록</h2>
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

export default CompletedTodos;