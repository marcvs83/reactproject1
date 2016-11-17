import React from 'react';
import Item from './Item';

class List extends React.Component {
  render() {
    let items = this.props.items.map( item => {
      return(<Item key={item.id} {...item} onTodoClick={this.props.onTodoClick} />);
    });
    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

export default List;