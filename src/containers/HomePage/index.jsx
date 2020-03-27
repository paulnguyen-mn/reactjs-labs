import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import Countdown from '../../components/Countdown';
import './HomePage.css';

class HomePage extends PureComponent {
  render() {
    const todos = [
      { id: 1, title: 'Học ko đau đâu nha! :P' },
      { id: 2, title: 'Hk đau chết liền =))' },
    ];

    return (
      <div className="home-page">
        <TodoList todoList={todos} />

        <Countdown seconds={30} />
      </div>
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;