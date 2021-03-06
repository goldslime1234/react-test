import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
//import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import axios from "axios";
import PropTypes from "prop-types";
export default class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  delTodo = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/${id}")
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  // delTodo = (id) => {
  //   this.setState({
  //     todos: [...this.state.todos.filter((todo) => todo.id !== id)],
  //   });
  // };

  addTodo = (title) => {
    console.log(title);
    // const newTodo = {
    //   // id: uuid.v4(),
    //   // title,
    //   // completed: false,
    // };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));

    //spread operator to add into exisiting array
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    );
  }
}

//Proptypes req string
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  AddTodo: PropTypes.func.isRequired,
};

//npm start
//npm creat-react-app name
//npm install --save react-router-dom
