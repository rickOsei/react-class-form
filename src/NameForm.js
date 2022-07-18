import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleNameChange = ({ target }) => {
    this.setState({ name: target.value });
    console.log(this.state.name);
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Enter name..."
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      </>
    );
  }
}

export default NameForm;
