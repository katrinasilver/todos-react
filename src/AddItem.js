import React, { Component } from 'react'

// destructured props!
class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: ''
    }
  }

  addItem = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  newId = () => {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  onSubmit = (e) => {
    e.preventDefault()
    let item = {
      id: this.newId(),
      description: this.state.item,
      completed: false
    }

    this.setState({
      item : ''
    })

    this.props.addOne(item)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="item" type="text" onChange={this.addItem} value={this.state.item}/>
        <button type="submit">Add a Todo</button>
      </form>
    )
  }
}

export default AddItem
