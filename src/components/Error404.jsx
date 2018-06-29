import React from 'react';
import { Link } from 'react-router-dom';
imprt { PropTypes} from 'prop-types';

function Error404(){
  return (
    <div>
      //location?
      <h2>The page {props.location.pathname} does not exist</h2>
      <h3>Return <Link to="/">Home</Link>?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
