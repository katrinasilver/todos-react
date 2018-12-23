import React from 'react'

const ListItem = ({ todo, completeOne, index }) => {
  return (
    <li style={todo.completed ? { textDecoration: 'line-through' } : null} data-id={index}>

      <p>{todo.description}</p>
      <button onClick={() => completeOne(todo)}>Complete</button>
      <button>Delete</button>

    </li>
  )
}

export default ListItem
