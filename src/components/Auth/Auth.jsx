import React, {Fragment} from "react"
import Help from "../Help/Help"
import Btn from "../Btn/Btn" 

import './Auth.scss'

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

class Auth extends React.Component {
  state = initialState;

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
// поле имя
    if (!this.state.name) {
      nameError = "не может быть пустым"
    }
// поле email
    if (!this.state.email.includes("@")) {
      emailError = "неверное значение"
    }
// поле password
    if (this.state.password.length < 10) {
      passwordError = "должно быть не меньше 10 символов"
    }

    if (emailError || nameError || passwordError) {
      this.setState({
        emailError: emailError,
        nameError: nameError,
        passwordError: passwordError
      });
      return false;
    }
    return true; // если нет ошибок
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState); // очищаем если норм
    }
  };
  render() {
    return (
        <Fragment>
            <h1>Зарегистрируйся, злодей</h1>
            <div className="auth">
                <form onSubmit={this.handleSubmit}>
                    <div className="auth__items" >
                        <input
                        className={this.state.nameError ? 'auth__items__input auth__items__input--error': 'auth__items__input'}
                        name="name"
                        placeholder="name"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                        <div className="auth__error-text">{this.state.nameError}</div>
                    </div>
                    <div className="auth__items">
                        <input
                        className={this.state.emailError ? 'auth__items__input auth__items__input--error': 'auth__items__input'}
                        name="email"
                        placeholder="email"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                        <div className="auth__error-text">{this.state.emailError}</div>
                    </div>
                    <div className="auth__items">
                        <input
                        className={this.state.passwordError ? 'auth__items__input auth__items__input--error': 'auth__items__input'}
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                        <div className="auth__error-text">{this.state.passwordError}</div>
                    </div>
                    <div className="auth__bottom">
                        <Btn btnNameAdd="Готово"/>
                        <Help onClick={this.props.handleHelpClick} />
                    </div>
                </form>
            </div>
        </Fragment>    
    );
  }
}

export default Auth
