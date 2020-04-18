import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleAdd() {
    const { value } = this.state;
    const { addTodo } = this.props;
    addTodo(value);
  }

  render() {
    const { todoReducer } = this.props;
    const { todo } = this.state;
    return (
      <div className="container">
        <div className="mt-5 ml-5">
          <input type="text" name="todo" value={todo} onChange={this.handleChange} />
          &emsp;
          <button onClick={this.handleAdd}>Add</button>
          <br />
          {
              todoReducer.map((todo, index) => (
                <div key={index}>
                    {`${index+1}) ${todo}`}
                    <br/>
                </div>
              ))
          }
        </div>
      </div>
    );
  }
}
