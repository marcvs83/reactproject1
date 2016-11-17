import React from 'react';

const Item = ({ id, name, complete, onTodoClick }) => (
  <li
    onClick={() => onTodoClick(id)}
    style={ complete ? { textDecoration: 'line-through', color: 'grey'} : {} }
  >
    {name}
  </li>
);

export default Item;