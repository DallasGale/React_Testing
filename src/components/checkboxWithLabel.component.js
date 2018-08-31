import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxWithLabel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    this.setState(
      prevState => ({
        isChecked: !prevState.isChecked
      })
    );
  }

  render() {

    const { labelOn, labelOff } = this.props;

    return (
      <label>
        <input 
          type="checkbox" 
          checked={ this.state.checked }
          onChange={ this.handleOnChange }
        />
        { this.state.isChecked ? labelOn : labelOff }
      </label>
    );
  }
}

CheckboxWithLabel.propTypes = {

};

export default CheckboxWithLabel;