import React from 'react';
import '../TodoList.css';

const Todos = ({todos, filterType, handleStatusChange, handleDelete}) => (
  <ul className="list">
    {todos
      .filter(i => {
        if(filterType===1) return i.completed;
        else if(filterType===-1) return !i.completed;
        else return true;
      })
      .map((item,index) => (
      <li key={index} className={item.completed?'completed':''} style={{display: item.deleted?'none':'block'}}>
        <span className="todo-text" onClick={() => handleStatusChange(index)}>{item.text}</span>
        <button onClick={() => handleDelete(index)}>x</button>
      </li>
    ))}
  </ul> 
)

export default Todos;