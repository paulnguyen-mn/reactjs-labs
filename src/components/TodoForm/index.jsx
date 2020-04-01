import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleValueChange = (e) => {
    // console.log(e, e.target, e.target.value);
    this.setState({ value: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    // Prepare and callback
    const { onSubmit } = this.props;
    if (onSubmit) {
      const formValues = {
        value: this.state.value,
      };

      onSubmit(formValues);

      // Reset form after submitting
      this.setState({ value: '' });
    }
  }

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          value={value}
          type="text"
          onChange={this.handleValueChange}
        />
      </form>
    );
  }
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

export default TodoForm;