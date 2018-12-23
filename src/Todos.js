import React, { Component } from 'react';

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
        <ul>
          <li>
            <p>To do's goe here</p>
            <button>Complete</button>
            <button>Delete</button>
          </li>
        </ul>
        <button onClick={this.completeAll}>Complete All</button>
      </div>
    );
  }
}

export default Todo;
