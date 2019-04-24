import React, { SFC } from 'react';
import '../TodoList.css';

interface IProps {
  readonly inputValue: string;
  readonly handleInputChange: (e:React.ChangeEvent)=>void;
  readonly handleAddTodo: ()=>void;
}

const Add:SFC<IProps> = ({inputValue, handleInputChange, handleAddTodo}) => (
  <p className="add">
    <input value={inputValue} onChange={handleInputChange}/>
    <button onClick={handleAddTodo}>添加</button>
  </p>
)

export default Add;