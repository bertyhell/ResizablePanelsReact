import React, { Component } from 'react';

export default class Resizer extends Component {
  getStyle() {
    if (this.props.direction === 'column') {
      return {
        width: '100%',
        height: this.props.size,
        background: this.props.color
      };
    }

    return {
      width: this.props.size,
      height: '100%',
      background: this.props.color
    };
  }

  render() {
    return <div onMouseDown={this.props.onMouseDown} style={this.getStyle()} />;
  }
}
