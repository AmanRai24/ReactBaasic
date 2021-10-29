import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email, mobile } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
      mobile,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.mobile === ""
    ) {
      alert("ALL THE FIELDS ARE MANDATORY TO FILL!!!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({
      name: "",
      email: "",
      mobile: "",
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div style={{ marginTop: "47px" }} className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={this.state.mobile}
              onChange={(e) => this.setState({ mobile: e.target.value })}
            />
          </div>
          <button className="ui button blue">UPDATE</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
