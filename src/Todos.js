import React, { Component } from 'react';
import List from './List'
class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, description: 'Gotta go fast', completed: false },
        { id: 2, description: 'Recover chaos emeralds', completed: false },
        { id: 3, description: 'Find time to chill with Tails', completed: false }
      ]
    }
  }

  completeAll = (e) => {
    e.preventDefault()
    let completeAll = this.state.todos.map(todo => ({...todo, completed: true}) )
    this.setState({
      todos: completeAll
    })

    console.log(completeAll)
  }

  render() {
    return (
      <div className="container">

        <List todos={this.state.todos} />

        <button onClick={this.completeAll}>Complete All</button>

      </div>
    );
  }
}

export default Todo;
