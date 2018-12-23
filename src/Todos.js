import React, { Component } from 'react';
import List from './List'
import AddItem from './AddItem'
class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
      ]
    }
  }

  completeAll = () => {
    let completeAll = this.state.todos.map(todo => ({...todo, completed: true }) )
    this.setState({
      todos: completeAll
    })
  }

  completeOne = (todo) => {
    let completeOne = this.state.todos.map(t => t === todo ? { ...t, completed: true } : { ...t })
    this.setState({
      todos: completeOne
    })
  }

  deleteOne = (todo) => {
    let deleteOne = this.state.todos.filter(t => t !== todo)
    this.setState({
      todos: deleteOne
    })
  }

  addOne = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    return (
      <div className="container" style={ { padding: '30px'} }>
        <button onClick={this.completeAll}>Complete All</button>

        <List todos={this.state.todos}
          completeOne={this.completeOne}
          deleteOne={this.deleteOne}
        />

        <AddItem addOne={this.addOne}/>

      </div>
    );
  }
}

export default Todo;
