import React, { SFC } from 'react';
import '../TodoList.css';

interface IProps {
  readonly filterType: 0|1|-1;
  readonly handleChangeFilter: (filterType: 0|1|-1)=>void;
}

const Filter: SFC<IProps> = ({filterType, handleChangeFilter}) => (
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