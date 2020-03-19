import React from "react"
import PropTypes from 'prop-types'

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
        {this.state.isVisible && <div className="help__modal">
          <ul>
            <li>поля должны быть заполнены</li>
            <li>поле email должно содержать символ @</li>
            <li>поле пароль должно быть не меньше 10 символов</li>
          </ul>
        </div>}
      </div>
    );
  }
}

Help.propTypes = {
  onClick: PropTypes.func
}

export default Help
