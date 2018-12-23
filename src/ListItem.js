import React from 'react'

const ListItem = (props) => {
  return (
    <li style={ props.todo.completed ? { textDecoration: 'line-through' } : null } data-id={props.index}>
      <p>{props.todo.description}</p>
      <button>Complete</button>
      <button>Delete</button>
    </li>
  )
}

export default ListItem
