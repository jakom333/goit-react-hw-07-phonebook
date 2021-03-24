import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RegisterView extends Component {
  state = {
    name: '',
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
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.onHandleSubmit} autoComplete="off">
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onHandleChange}
            />
          </label>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
