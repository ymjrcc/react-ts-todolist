import React from 'react';
import {SFC} from 'react';
import '../TodoList.css';

enum FilterType {
  All = 1,
  Completed,
  NotCompleted
}

interface IProps {
  readonly todos: Array<ITodo>;
  readonly filterType: FilterType;
  readonly handleStatusChange: (index:number)=>void;
  readonly handleDelete: (index:number)=>void;
}

interface ITodo {
  text: string;
  completed: boolean;
  deleted?: boolean;
}

const Todos: SFC<IProps> = ({todos, filterType, handleStatusChange, handleDelete}) => (
  <ul className="list">
    {todos
      .filter((i:ITodo) => {
        if(filterType===FilterType.Completed) return i.completed;
        else if(filterType===FilterType.NotCompleted) return !i.completed;
        else return true;
      })
      .map((item:ITodo,index:number) => (
      <li key={index} className={item.completed?'completed':''} style={{display: item.deleted?'none':'block'}}>
        <span className="todo-text" onClick={() => handleStatusChange(index)}>{item.text}</span>
        <button onClick={() => handleDelete(index)}>x</button>
      </li>
    ))}
  </ul> 
)

export default Todos;