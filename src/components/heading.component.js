import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';


// - - - - - //
// Component //
// - - - - - //

const Heading = props => {
  return (
    <h1 data-testid="my_heading" className={ heading_style }>
      React Testing
    </h1>
  );
};


// PropTypes
Heading.propTypes = {
  title: PropTypes.string
}

// CSS
const heading_style = css`
  color: orange;
`;



export default Heading;