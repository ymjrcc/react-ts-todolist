import React, { Component } from 'react';
import Add from './components/Add';
import Todos from './components/Todos';
import Filter from './components/Filter';
import './TodoList.css';

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {text: '待办1', completed: false},
        {text: '待办2', completed: false},
        {text: '待办3', completed: true},
      ],
      inputValue: '',
      filterType: 0, //0: 全部; 1: 已完成; -1: 未完成;
    }
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleAddTodo = () => {
    if(!this.state.inputValue)return;
    this.setState({
      todos: [
        ...this.state.todos, 
        { text: this.state.inputValue, completed: false },
      ],
      inputValue: '',
    });
  }

  handleStatusChange = index => {
    const newTodos = [...this.state.todos];
    newTodos[index] = {
      ...newTodos[index],
      completed: !newTodos[index].completed,
    };
    this.setState({
      todos: newTodos,
    });
  }

  handleDelete = index => {
    const newTodos = [...this.state.todos];
    newTodos[index] = {
      ...newTodos[index],
      deleted: true,
    };
    this.setState({
      todos: newTodos,
    });
  }

  handleChangeFilter = filterType => {
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

  componentDidUpdate(oldProps, oldState){
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

// 生命周期