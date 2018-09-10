import React, { Component } from 'react';
import ToggleSidebarContainer from './toggleSidebar.container';
import Sidebar from '../components/sidebar.component';
import { css } from 'emotion';
// import PropTypes from 'prop-types';

class SidebarContainer extends Component {

  constructor() {
    super();
    this.state = {
      sidebarOpen: false   
    }
    this.handleSidebar = this.handleSidebar.bind(this);
    console.log(this.state.sidebarOpen);

  }

  handleSidebar() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  render() {
    return (
      <div>
        <ToggleSidebarContainer 
          click={ this.handleSidebar } 
          open={ this.state.sidebarOpen } />

        <Sidebar 
          styles={ this.state.sidebarOpen ? open : closed } />
      </div>
    );
  }
}

// SidebarContainer.propTypes = {

// };

export default SidebarContainer;

const open = { left: '0' };

const closed = { left: '-300px' };