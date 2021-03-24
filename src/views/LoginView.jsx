import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  onHandleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onHandleSubmit = evt => {
    evt.preventDefault();

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.onHandleSubmit} autoComplete="off">
          <label>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onHandleChange}
            />
          </label>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(LoginView);
