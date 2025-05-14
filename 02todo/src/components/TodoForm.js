// src/components/TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo(''); // 입력창 초기화
    }
  };

  // 키 입력 처리 (Enter 키)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="새로운 할 일 입력..."
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;