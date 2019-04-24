import * as React from 'react';
import {SFC} from 'react';
import '../TodoList.css';

interface IProps {
  readonly todos: any;
  readonly filterType: any;
  readonly handleStatusChange: any;
  readonly handleDelete: any;
}

const Todos: SFC<IProps> = ({todos, filterType, handleStatusChange, handleDelete}) => (
  <ul className="list">
    {todos
      .filter((i:any) => {
        if(filterType===1) return i.completed;
        else if(filterType===-1) return !i.completed;
        else return true;
      })
      .map((item:any,index:number) => (
      <li key={index} className={item.completed?'completed':''} style={{display: item.deleted?'none':'block'}}>
        <span className="todo-text" onClick={() => handleStatusChange(index)}>{item.text}</span>
        <button onClick={() => handleDelete(index)}>x</button>
      </li>
    ))}
  </ul> 
)

export default Todos;