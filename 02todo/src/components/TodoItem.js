import React, {useState} from "react";

function TodoItem({todo, toggleComplete, deleteTodo, updateTodo}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // 수정 모드 시작
  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  //수정 저장
  const handleSave = () => {
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  // 수정 취소
  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  // 키보드 이벤트 처리 (Enter로 저장, Esc로 취소)
  const handleKeyDown =(e) => {
    if(e.key === 'Enter'){
      handleSave();
    } else if(e.key ==='Escape') {
      handleCancel();
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        // 수정 모드
        <div className="edit-mode">
          <input
            type ="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <div className="edit-buttons">
            <button onClick={handleSave} className="save-btn">저장</button>
            <button onClick={handleCancel} className="cancel-btn">취소</button>
          </div>
        </div>
      ) : (
        // 일반 모드
        <>
          <div className="todo-content">
            <input
              type ='checkbox'
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
          </div>
          <div className="todo-actions">
            <button
              onClick={handleEdit}
              className="edit-btn"
              disabled={todo.completed}
            >수정</button>
            <button onClick={()=> deleteTodo(todo.id)} className="delete-btn">삭제</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;