import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Reviews extends PureComponent {
  render() {
    return (
      <div>
        <h2>Product reviews</h2>

        <ul>
          <li>
            Super cool!
          </li>
          <li>
            Super cool!
          </li>
          <li>
            Super cool!
          </li>
        </ul>
      </div>
    );
  }
}

Reviews.propTypes = {

};

export default Reviews;