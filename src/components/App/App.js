import React, { Component } from "react";
import uniqid from "uniqid";
import "./App.css";
import Overview from "../Overview/Overview";
import EducationForm from "../EducationForm/EducationForm";

const fields = [
  { field: "name", type: "text", id: uniqid() },
  { field: "email", type: "email", id: uniqid() },
  { field: "cell", type: "tel", id: uniqid() },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { value: "", change: "", id: uniqid() },
      email: { value: "", change: "", id: uniqid() },
      cell: { value: "", change: "", id: uniqid() },
      eduFormCount: 2,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: { change: e.target.value, id: uniqid() },
    });
  };

  onAddMore = (e) => {
    e.preventDefault();
    this.setState({
      eduFormCount: this.state.eduFormCount + 1,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    fields.map((field) =>
      this.setState({
        [field.field]: {
          value: this.state[field.field].change,
          id: uniqid(),
        },
      })
    );
  };

  render() {
    const { name, email, cell, eduFormCount } = this.state;
    return (
      <div className="wrapper">
        <form onSubmit={this.onSubmitForm}>
          {fields.map((field) => (
            <div className="field" key={field.id}>
              <label htmlFor={field.field}>
                {field.field[0].toUpperCase() + field.field.slice(1)}:{" "}
              </label>
              <input
                onChange={this.handleChange}
                type={field.type}
                id={field.field}
                required
              />
            </div>
          ))}
          <EducationForm eduFormCount={eduFormCount} />
          <button onClick={this.onAddMore}>Add More</button>
          <button type="submit">Submit</button>
        </form>
        <Overview fields={fields} name={name} email={email} cell={cell} />
      </div>
    );
  }
}
export default App;
