import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(e) {
      e.preventDefault();
      let item = this.refs.item.value;
      this.refs.form.reset();
      this.props.addTodoItem(item);
  }

  render() {
    return (
      <form ref="form" onSubmit={this.addTodo}>
        <input ref="item" placeholder="Add a Todo" />
      </form>
    )
  }
}

export default TodoForm;

