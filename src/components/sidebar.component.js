import React, { PureComponent } from 'react';
import { css } from 'emotion';
// import PropTypes from 'prop-types';

class Sidebar extends PureComponent {
  render() {
    return (
      <aside className={ aside } style={ this.props.styles }>
        <nav>
          Navigation
        </nav>
      </aside>
    );
  }
}

// Sidebar.propTypes = {

// };

export default Sidebar;


const aside = css`
  background-color: rgba(255,255,255,0.9);
  color: #000;
  height: 100vh;
  padding: 50px 20px;
  position: fixed; 
  width: 10%;
  transition: all 0.3s;
`;
