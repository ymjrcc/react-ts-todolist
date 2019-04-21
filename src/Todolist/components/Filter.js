import React from 'react';
import '../TodoList.css';

const Filter = ({filterType, handleChangeFilter}) => (
  <p className="filter">
      <button 
      disabled={filterType===0} 
      onClick={() => handleChangeFilter(0)}
    >全部</button>
    <button 
      disabled={filterType===1} 
      onClick={() => handleChangeFilter(1)}
    >已完成</button>
    <button 
      disabled={filterType===-1} 
      onClick={() => handleChangeFilter(-1)}
    >未完成</button>
  </p>
)

export default Filter;