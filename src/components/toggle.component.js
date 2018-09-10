import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const Toggle = props => {
  
  const { label, click } = props;

  return (
    <button
      className={ toggle }
      onClick={ click }>
        { label }
    </button>
  );
}

Toggle.propTypes = {
  click: PropTypes.func,
  label: PropTypes.string
};

export default Toggle;


// Css

const toggle = css` 
  background: #000;
  border: 0;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  z-index: 1;
`;