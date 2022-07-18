import React from "react";

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "" };
  }

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
    console.log(this.state.password);
  };

  render() {
    return (
      <>
        <input
          type="password"
          placeholder="Enter password..."
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
      </>
    );
  }
}

export default PasswordForm;
