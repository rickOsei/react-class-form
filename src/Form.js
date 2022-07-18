import React, { Component } from "react";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";

export default class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <NameForm />
          <EmailForm />
          <PasswordForm />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
