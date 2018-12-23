import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
  return (
    <ul>
      {
        props.todos.map(todo =>
          <ListItem key={todo.id} index={todo.id} todo={todo}
            completeOne={props.completeOne}
          />
        )
      }
    </ul>
  )
}

export default List
