import React, { SFC } from 'react';
import '../TodoList.css';

type FilterType = 0|1|-1;

interface IProps {
  readonly filterType: FilterType;
  readonly handleChangeFilter: (filterType: FilterType)=>void;
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