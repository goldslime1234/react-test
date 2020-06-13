import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todos.completed) {
      return {
        backgroundColor: "#f4f4f4",
        padding: "10px",
        textDecoration: this.props.todos.completed ? "line-through" : "none",
      };
    } else {
      return {
        textDecoration: "none",
      };
    }
  };

  render() {
    const { id, title } = this.props.todos;
    //console.log(this.props.todos.id)
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />
        {""}

        <p>{title}</p>
        <button onClick={this.props.delTodo.bind(this, id)}>del</button>
      </div>
    );
  }
}

//Proptypes req string
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default TodoItem;
