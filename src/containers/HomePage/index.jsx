import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import Countdown from '../../components/Countdown';
import './HomePage.css';
import TodoForm from '../../components/TodoForm';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTodoId: 1,
      todoList: [
        { id: 1, title: 'Học ko đau đâu nha! :P' },
        { id: 2, title: 'Hk đau chết liền =))' },
      ],
    };
  }

  handleTodoClick = (todo) => {
    this.setState({ activeTodoId: todo.id });
  };

  handleTodoFormSubmit = (formValues) => {
    console.log('Form submit: ', formValues);
    this.setState(prevState => {
      const newTodoList = [...prevState.todoList];
      const newTodo = {
        id: newTodoList.length + 1, // fake id
        title: formValues.value,
      };
      newTodoList.push(newTodo);

      return {
        todoList: newTodoList,
      };
    })
  };

  render() {
    const { todoList, activeTodoId } = this.state;

    return (
      <div className="home-page">
        <TodoList
          todoList={todoList}
          activeTodoId={activeTodoId}
          onActiveItemChange={this.handleTodoClick}
        />

        <TodoForm onSubmit={this.handleTodoFormSubmit} />

        {/* <Countdown seconds={30} /> */}
      </div>
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;