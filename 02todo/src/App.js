// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';

function App() {
  // 상태 관리
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 비활성화
  const [error, setError] = useState(null);

  // 컴포넌트 마운트 시 localStorage에서 할 일 목록 불러오기
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // todos 상태가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 할 일 추가 함수
  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodoItem = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTodos([newTodoItem, ...todos]);
  };

  // 할 일 완료 상태 토글 함수
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  // 할 일 삭제 함수
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 할 일 수정 함수
  const updateTodo = (id, newText) => {
    if (!newText.trim()) return;

    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, text: newText.trim() };
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      {error && <div className="error-message">{error}</div>}
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
    </div>
  );
}

export default App;