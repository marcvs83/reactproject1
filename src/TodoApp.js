import React from 'react';
import List from './List';
import TodoForm from './TodoForm';
import Filter from './Filter';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.onTodoClick = this.onTodoClick.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.filteredItems = this.filteredItems.bind(this);
    this.state = { items: [], id: 0, filter: 'All' }
  }

  setFilter(filter) {
    this.setState({ filter });
  }


  filteredItems() {
    switch(this.state.filter) {
      case 'All':
        return this.state.items;
      case 'Active':
        return this.state.items.filter( item => !item.complete )
      case 'Complete':
        return this.state.items.filter( item => item.complete )
    }
  }

  onTodoClick(id) {
    let items = this.state.items.map( item => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete
        }
      }

      return item;
    });

    this.setState({ items });
  }

  addTodoItem(name) {
    let id = ++this.state.id;
    this.setState({
      items: [
        { name, id, complete: false },
        ...this.state.items
      ],
      id
    });
  }
  render() {
    return (
      <div>
        <TodoForm addTodoItem={this.addTodoItem}/>
        <List items={this.filteredItems()} onTodoClick={this.onTodoClick} />
        <Filter setFilter={this.setFilter} currentFilter={this.state.filter} />
      </div>
    )
  }
}


export default TodoApp;