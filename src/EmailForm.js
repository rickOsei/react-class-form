import React from "react";

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
    console.log(this.state.email);
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Enter email..."
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
      </>
    );
  }
}

export default EmailForm;
