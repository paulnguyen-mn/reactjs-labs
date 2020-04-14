import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Description extends PureComponent {
  render() {
    return (
      <div>
        <h2>Product description</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cum. Provident voluptate cumque veniam consequatur eligendi vero maxime quos voluptatibus magnam quo, ducimus quaerat a nesciunt, placeat possimus reiciendis error.</p>
      </div>
    );
  }
}

Description.propTypes = {

};

export default Description;