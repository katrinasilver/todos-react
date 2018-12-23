import React from 'react'

// destructured props!
const ListItem = ({ todo, completeOne, deleteOne, index }) => {
  return (
    <li style={todo.completed ? { textDecoration: 'line-through' } : null} data-id={index}>

      <p>{todo.description}</p>
      <button onClick={() => completeOne(todo)}>Complete</button>
      <button onClick={() => deleteOne(todo)}>Delete</button>

    </li>
  )
}

export default ListItem
