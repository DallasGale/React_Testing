import React, { Component } from 'react';

const status = {
  hovered: 'hovered',
  normal: 'normal'
};

class Link extends Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      class: status.normal
    };
  }

  onMouseEnter() {
    this.setState({
      class: status.hovered
    })
  }

  onMouseLeave() {
    this.setState({
      class: status.normal
    })
  }

  render() {
    return (
      <a 
        className={ this.state.class } 
        href={ this.props.page || '#' }
        onMouseEnter={ this.onMouseEnter }
        onMouseLeave={ this.onMouseLeave }
        >
          { this.props.children }
        </a>
    );
  }
}

export default Link;