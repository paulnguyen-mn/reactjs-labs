import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SubDescription extends PureComponent {
  handleButtonClick = () => {
    // this.props.history.push()
  }

  render() {
    console.log('SubDescription: ', this.props)

    return (
      <div>
        Subscription

        <p>Subscription</p>
        <button>Go somewhere</button>
      </div>
    );
  }
}

SubDescription.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

// export default SubDescription;
export default withRouter(SubDescription);
