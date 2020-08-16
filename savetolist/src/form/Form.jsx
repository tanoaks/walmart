import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      list: [],
    };

    this.addToList = this.addToList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addToList(event) {
    let list = [...this.state.list];
    list.push(this.state.value);
    this.setState({ list, value: "" });
    event.target.value = "";
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addToList}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
