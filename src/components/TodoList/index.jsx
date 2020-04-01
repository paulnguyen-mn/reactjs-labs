import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoList extends PureComponent {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     activeTodoId: null,
  //   };
  // }

  handleTodoClick = (todo) => {
    // which todo is clicked
    console.log(todo);
    // this.setState({ activeTodoId: todo.id });
    const { onActiveItemChange } = this.props;
    if (onActiveItemChange) {
      onActiveItemChange(todo);
    }
  };

  render() {
    // const todoList = this.props.todoList;
    const { todoList, activeTodoId } = this.props;
    // const { activeTodoId } = this.state;

    return (
      <div>
        TodoList: {todoList.length}

        <ul>
          {todoList.map(todo => {
            // reuse logic
            const isActive = todo.id === activeTodoId;

            return (
              <li
                key={todo.id}
                className={isActive ? 'active' : ''}
                style={{ color: isActive ? 'deeppink' : 'black' }}
                onClick={() => this.handleTodoClick(todo)}
              >
                {todo.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  activeTodoId: PropTypes.number,
  onActiveItemChange: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  activeTodoId: -1,
  onActiveItemChange: null,
};

export default TodoList;