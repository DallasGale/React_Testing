import React, { PureComponent } from 'react';
import { css } from 'emotion';
import Links from './links.component';

// import PropTypes from 'prop-types';

const menu = [
  {
    item: 'HOME'
  },
  {
    item: 'ABOUT'
  }, 
  {
    item: 'CONTACT'
  } 
];


class Sidebar extends PureComponent {
  
  
  render() {
    return (
      <aside className={ aside } style={ this.props.styles }>
        <nav>
          Navigation
          <ul className={ ul }>
            {
              menu.map((i, index) => <Links key={ index } name={ i.item } /> )
            }
          </ul>
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
  width: auto;
  transition: all 0.3s;
`;

const ul = css`
  padding-left: 0;
`;

