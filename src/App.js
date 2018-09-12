import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/login.component';
import Heading from './components/heading.component';
import SidebarContainer from './containers/sidebar.container';
import { css } from 'emotion';
import './App.css';

class App extends Component {
  render() {
    return (

      <Login onSubmit={ data => alert(JSON.stringify(data))} />

      // <div className="App">
      //   <a href="#content" className="skip-link sr-only sr-only-focusable">Go To Content</a>
      //   <SidebarContainer />
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <Heading title="React Testing" />
      //   </header>

      //   <div className={ content }>
      //     <p id="content">Important content for accessibility</p>
      //   </div>


      // </div>
    );
  }
}

export default App;

// const link = css`
//   visibility: hidden;
//   &:focus {
//     visibility: visible;
//   }
// `;

const content = css`
  position: absolute;
  top: 1000px;
`;