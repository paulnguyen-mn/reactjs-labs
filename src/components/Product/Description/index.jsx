import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SubDescription from '../SubDescription';

class Description extends PureComponent {
  render() {
    console.log('Description: ', this.props.history)

    // const { match, history, location } = this.props;
    // const routingHelpers = {
    //   match,
    //   location,
    //   history,
    // };

    return (
      <div>
        <h2>Product description</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cum. Provident voluptate cumque veniam consequatur eligendi vero maxime quos voluptatibus magnam quo, ducimus quaerat a nesciunt, placeat possimus reiciendis error.</p>

        <SubDescription />
      </div>
    );
  }
}

Description.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Description;