import React, { Component } from 'react';
import Add from './components/Add';
import Todos from './components/Todos';
import Filter from './components/Filter';
import './TodoList.css';

enum FilterType {
  All = 1,
  Completed,
  NotCompleted
}

interface IProps {

}

interface IState {
  todos: Array<ITodo>;
  inputValue: string;
  filterType: FilterType;
}

interface ITodo {
  text: string;
  completed: boolean;
  deleted?: boolean;
}

export default class Todolist extends Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);
    this.state = {
      todos: [
        {text: '待办1', completed: false},
        {text: '待办2', completed: false},
        {text: '待办3', completed: true},
      ],
      inputValue: '',
      filterType: FilterType.All,
    }
  }

  handleInputChange = (e:React.ChangeEvent):void => {
    this.setState({
      inputValue: (e.target as HTMLInputElement).value,
    })
  }

  handleAddTodo = ():void => {
    if(!this.state.inputValue)return;
    this.setState({
      todos: [
        ...this.state.todos, 
        { text: this.state.inputValue, completed: false },
      ],
      inputValue: '',
    });
  }

  handleStatusChange = (index:number):void => {
    const newTodos = [...this.state.todos];
    newTodos[index] = {
      ...newTodos[index],
      completed: !newTodos[index].completed,
    };
    this.setState({
      todos: newTodos,
    });
  }

  handleDelete = (index:number):void => {
    const newTodos = [...this.state.todos];
    newTodos[index] = {
      ...newTodos[index],
      deleted: true,
    };
    this.setState({
      todos: newTodos,
    });
  }

  handleChangeFilter = (filterType:FilterType):void => {
    this.setState({ filterType });
  }

  componentDidMount(){
    if(!window.localStorage.todos){
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }else{
      this.setState({
        todos: JSON.parse(window.localStorage.todos),
      });
    }
  }

  componentDidUpdate(oldProps:IProps, oldState:IState){
    if(oldState.todos !== this.state.todos){
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }
  
  render() {
    return (
      <div className="app">
        <h2>React Todo List</h2>
        <Add 
          inputValue={this.state.inputValue}
          handleAddTodo={this.handleAddTodo}
          handleInputChange={this.handleInputChange}
        />
        <Todos 
          todos={this.state.todos} 
          filterType={this.state.filterType}
          handleStatusChange={this.handleStatusChange}
          handleDelete={this.handleDelete}
        />
        <Filter 
          filterType={this.state.filterType}
          handleChangeFilter={this.handleChangeFilter}
        />
      </div>
    );
  }
}