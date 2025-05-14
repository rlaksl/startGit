// src/api/todoAPI.js
const BASE_URL = "http://localhost:3001";

// 모든 할 일 가져오기
export async function fetchTodos() {
  const response = await fetch(`${BASE_URL}/todos`);
  if (!response.ok) {
    throw new Error('할 일을 불러오는데 실패했습니다.');
  }
  return await response.json();
}

// 새 할 일 추가하기
export async function addTodo(todoData) {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todoData),
  });
  
  if (!response.ok) {
    throw new Error('할 일을 추가하는데 실패했습니다.');
  }
  
  return await response.json();
}

// 할 일 수정하기
export async function updateTodo(id, todoData) {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todoData),
  });
  
  if (!response.ok) {
    throw new Error('할 일을 수정하는데 실패했습니다.');
  }
  
  return await response.json();
}

// 할 일 삭제하기
export async function deleteTodo(id) {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('할 일을 삭제하는데 실패했습니다.');
  }
  
  return true;
}