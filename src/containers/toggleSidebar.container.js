import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Toggle from '../components/toggle.component'

class ToggleSidebarContainer extends Component {

  render() {
    return (
        <Toggle 
          click={ this.props.click } 
          label={ !this.props.open ? '>' : '<' } />
    );
  }
}

// ToggleSidebarContainer.propTypes = {
  
// };

export default ToggleSidebarContainer;