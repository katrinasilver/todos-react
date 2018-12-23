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
    let completeAll = this.state.todos.map(todo => ({...todo, completed: true }) )
    this.setState({
      todos: completeAll
    })

    console.log(completeAll)
  }

  completeOne = (todo) => {
    let completeOne = this.state.todos.map(t => t === todo ? { ...t, completed: true } : { ...t })
    this.setState({
      todos: completeOne
    })
  }

  render() {
    return (
      <div className="container" style={ { padding: '30px'} }>
        <button onClick={this.completeAll}>Complete All</button>

        <List todos={this.state.todos}
          completeOne={this.completeOne}
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
