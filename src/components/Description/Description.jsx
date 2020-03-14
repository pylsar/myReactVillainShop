import React, {Fragment} from "react";

import './Description.scss'

class Description extends React.Component {
  state = {
    description: false
  };

  handleDescription = () => {
    this.setState({
      description: !this.state.description
    });
  };
  render(props) {
    return (
      <Fragment>
        <div className="description">
          <h2>Описание</h2>
          <button onClick={this.handleDescription}>{this.state.description ? ' ↑ ' : ' ↓ ' }</button>
        </div>
        {this.state.description && <p>{this.props.descr}</p>}
      </Fragment>
    );
  }
}

export default Description;
