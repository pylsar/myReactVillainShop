import React from "react";

class Description extends React.Component {
  state = {
    description: false
  };

  handleDescription = () => {
    this.setState({
      description: !this.state.description
    });
  };
  render() {
    return (
      <div>
        <h2>Описание</h2>
        <button onClick={this.handleDescription}>push</button>
        {this.state.description && <p>123</p>}
      </div>
    );
  }
}

export default Description;
