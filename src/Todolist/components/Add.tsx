import React from 'react';
import '../TodoList.css';

const Add = ({inputValue, handleInputChange, handleAddTodo}) => (
  <p className="add">
    <input value={inputValue} onChange={handleInputChange}/>
    <button onClick={handleAddTodo}>添加</button>
  </p>
)

export default Add;