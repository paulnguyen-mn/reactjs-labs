import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

ContactPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function ContactPage(props) {
  const { match, location, history } = props;
  console.log({ match, location, history });

  useEffect(() => {
    console.log('Contact effect');

    setTimeout(() => {
      history.push('/about');
    }, 2000);
  }, [history]);

  return (
    <div>
      <h1>Contact page</h1>
    </div>
  );
}

export default ContactPage;