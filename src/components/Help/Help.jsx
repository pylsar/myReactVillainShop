import React from "react"

import './Help.scss'

class Help extends React.Component {
  state = {
    isVisible: false
  };
  handleHelpClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };
  render(props) {
    return (
      <div className="help">
        <div onClick={this.handleHelpClick}>?</div>
        {this.state.isVisible && <div className="help__modal">skldksllskdfkldfs</div>}
      </div>
    );
  }
}

export default Help
