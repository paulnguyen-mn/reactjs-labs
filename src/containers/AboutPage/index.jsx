import React from 'react';
import PropTypes from 'prop-types';
import { withUnloadConfirmation } from '../../hocs/withUnloadConfirmation';

AboutPage.propTypes = {

};

function AboutPage(props) {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}

export default withUnloadConfirmation(AboutPage);