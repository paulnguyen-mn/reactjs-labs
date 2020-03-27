import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Countdown extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentSecond: 0,
      numbers: [],
    };
  }

  componentDidMount() {
    // Call API
    // setState()

    // const { seconds } = this.props;
    // this.countdown(seconds);

    // const { numbers } = this.state;
    // numbers.push(1, 2, 3);
    // this.setState({ numbers: numbers });

    const { numbers } = this.state;
    const newNumbers = [...numbers];
    newNumbers.push(1, 2, 3);
    this.setState({ numbers: newNumbers });
  }

  countdown = (seconds) => {
    if (seconds === -1) return;

    this.setState({ currentSecond: seconds });

    setTimeout(() => {
      this.countdown(seconds - 1);
    }, 1000);
  };

  handleIncrementClick = () => {
    // Increase currentSecond by 1
    const { currentSecond } = this.state;
    this.setState({
      currentSecond: this.state.currentSecond + 1,
    });

    this.setState(prevState => {
      return {
        currentSecond: prevState.currentSecond + 1,
      }
    });
  };

  render() {
    const { currentSecond, numbers } = this.state;
    const name = 'Po Nguyen';

    return (
      <div>
        {currentSecond}

        <p>Number list length: {numbers.length}</p>

        {name && <p>{name}</p>}

        {true && <p>Show me</p>}
        {false && <p>Dont show me</p>}

        <button onClick={this.handleIncrementClick}>Tăng 1</button>
      </div>
    );
  }
}

Countdown.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default Countdown;