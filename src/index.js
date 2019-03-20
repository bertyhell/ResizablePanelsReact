import React, { Component } from 'react';

// Components
import Resizer from './components/Resizer';

//Props:
// bkcolor - background color
// displayDirection - flex direction
// width
// height
// panelsSize - size of the panels in order (left to rigth)
//sizeUnitMeasure - unit used to set the sizes (px, em, % ...)
export default class ResizablePanels extends Component {
  state = {
    panelsSize: []
  };

  componentDidMount() {
    this.setState({ ...this.state, panelsSize: this.props.panelsSize });
  }

  render() {
    const { bkcolor } = this.props;
    const rest =
      this.props.children.length > 1 ? this.props.children.slice(1) : [];

    return (
      <div
        style={{
          width: this.props.width,
          height: this.props.height,
          background: bkcolor,
          display: 'flex',
          flexDirection: this.props.displayDirection || 'row'
        }}
      >
        {this.renderFirst()}
        {this.renderRest(rest)}
      </div>
    );
  }

  renderFirst() {
    return (
      <div
        className="resizable-fragment"
        key={`fragment_0`}
        style={this.getStyle(this.props.displayDirection, 0)}
      >
        {this.props.children[0]}
      </div>
    );
  }

  renderRest(rest) {
    return [].concat(
      ...rest.map((children, index) => {
        return [
          this.renderResizer(index + 1),
          this.renderChildren(children, index + 1)
        ];
      })
    );
  }

  renderChildren(children, index) {
    return (
      <div
        className="resizable-fragment"
        key={`fragment_` + index}
        style={this.getStyle(this.props.displayDirection, index)}
      >
        {children}
      </div>
    );
  }

  renderResizer(index) {
    return <Resizer size="15px" direction={this.props.displayDirection} />;
  }

  getStyle(orientation, index) {
    const panelsSize = this.state.panelsSize || [];
    const panelsSizeLength = panelsSize.length - 1;
    const size = index > panelsSizeLength ? '100%' : panelsSize[index];
    const unitMeasure = this.props.sizeUnitMeasure || 'px';

    if (orientation === 'column') {
      return {
        height: `${size}${unitMeasure}`,
        width: `100%`,
        overflow: 'auto'
      };
    }

    return {
      height: `100%`,
      width: `${size}${unitMeasure}`,
      overflow: 'auto'
    };
  }
}
