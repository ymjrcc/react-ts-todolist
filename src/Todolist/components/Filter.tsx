import React, { SFC } from 'react';
import '../TodoList.css';

enum FilterType {
  All = 1,
  Completed,
  NotCompleted
}

interface IProps {
  readonly filterType: FilterType;
  readonly handleChangeFilter: (filterType: FilterType)=>void;
}

const Filter: SFC<IProps> = ({filterType, handleChangeFilter}) => (
  <p className="filter">
      <button 
      disabled={filterType===FilterType.All} 
      onClick={() => handleChangeFilter(FilterType.All)}
    >全部</button>
    <button 
      disabled={filterType===FilterType.Completed} 
      onClick={() => handleChangeFilter(FilterType.Completed)}
    >已完成</button>
    <button 
      disabled={filterType===-FilterType.NotCompleted} 
      onClick={() => handleChangeFilter(FilterType.NotCompleted)}
    >未完成</button>
  </p>
)

export default Filter;