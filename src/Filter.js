import React from 'react';

const filterLink = (text, current, cb) => {
  if (text === current)
    return (<span>{text}</span>)
  return (<span onClick={() => cb(text)} style={{ textDecoration: 'underline', color: 'blue'}}>{text}</span>);
}

const Filter = ({ currentFilter, setFilter }) => (
  <div>
    {filterLink('All', currentFilter, setFilter)}
    {' '}
    {filterLink('Active', currentFilter, setFilter)}
    {' '}
    {filterLink('Complete', currentFilter, setFilter)}
    {' '}
  </div>
);

export default Filter;
