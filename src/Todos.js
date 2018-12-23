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

  render() {
    return (
      <div className="container" style={ { padding: '30px'} }>
        <button onClick={this.completeAll}>Complete All</button>

        <List todos={this.state.todos}
          completeOne={this.completeOne}
          deleteOne={this.deleteOne}
        />

        <form>
          <input type="text" />
          <button type="submit">Add a Todo</button>
        </form>

      </div>
    );
  }
}

export default Todo;
