import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoList extends PureComponent {
  render() {
    // const todoList = this.props.todoList;
    const { todoList } = this.props;

    return (
      <div>
        TodoList: {todoList.length}

        <ul>
          {todoList.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

export default TodoList;