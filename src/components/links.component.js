import React from 'react';
// import PropTypes from 'prop-types';
import { css } from 'emotion';

const Links = props => {
  return (
    <li 
      className={ list }>
      <a href={`${ props.name.toLowerCase() }/`}>
        { props.name }
      </a>
    </li>
  );
};

// Links.propTypes = {
  
// };

export default Links;


const list = css`
  font-size: 0.8rem;
  list-style: none;
  text-align: left;
`;