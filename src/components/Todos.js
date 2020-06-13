import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
//rce
class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todos={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//Proptypes req string
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
