import React from "react";

function TodoStats({todos}) {
  //완료된 할 일 개수 계산
  const completedCount = todos.filter(todo => todo.completed).length;

  return(
    <div className="todo-stats">
      <p>전체: {todos.length}개 | 완료: {completedCount}개</p>
    </div>
  )
}


export default TodoStats;