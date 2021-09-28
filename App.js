import React, { Component } from 'react';
import TodoItem from './Component/todoitem/Todoitem';
import AddItem from './Component/additem/Additem';
import './App.css';


class App extends Component {
  
  state = {
    items : [
      {id:1, name:"eslam",age:25},
      {id:2,name:"Ahmed",age:58},
      {id:3,name:"ismail",age:21} 
    ]
  }
  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex( item => item.id === id)
    items.splice(i,1)
    this.setState({items:items})
  
  }
  addItem = (item) => {
    item.id =Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items:items})

  }
  render(){
  return (
    <div className="App container">
      <h1 className="Header"> Todo List</h1>
     <TodoItem items ={this.state.items} deleteItem={this.deleteItem} /> 
     <AddItem addItem = {this.addItem} />
    </div>
  );
}
}

export default App;
