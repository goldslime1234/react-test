import React, { Component } from "react";
import PropTypes from "prop-types";
export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="text"
          value={this.state.title}
          onChange={this.onChange}
        />

        <input type="submit" value="submit" />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default AddTodo;
