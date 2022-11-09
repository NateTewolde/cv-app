import React, { Component } from "react";
import uniqid from "uniqid";
import "./App.css";
import EducationForm from "../EducationForm/EducationForm";
import { PersonalInfo, Education } from "../Overview/Overview";

const fields = [
  { field: "name", type: "text", id: uniqid() },
  { field: "email", type: "email", id: uniqid() },
  { field: "cell", type: "tel", id: uniqid() },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { change: "Nate T", id: uniqid() },
      email: { change: "email@myemail.com", id: uniqid() },
      cell: { change: "555-555-5555", id: uniqid() },
      eduFormCount: 1,
      eduSchoolInput1: { value: "", change: "", id: uniqid() },
      eduTitleInput1: { value: "", change: "", id: uniqid() },
      eduDateInput1: { value: "", change: "", id: uniqid() },
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
      [`eduSchoolInput${this.state.eduFormCount + 1}`]: {
        value: "",
        change: "",
        id: uniqid(),
      },
      [`eduTitleInput${this.state.eduFormCount + 1}`]: {
        value: "",
        change: "",
        id: uniqid(),
      },
      [`eduDateInput${this.state.eduFormCount + 1}`]: {
        value: "",
        change: "",
        id: uniqid(),
      },
      eduFormCount: this.state.eduFormCount + 1,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    for (const state in this.state) {
      if (state === `eduFormCount`) {
        this.setState({
          eduFormCount: this.state.eduFormCount,
        });
        continue;
      }
      this.setState({
        [state]: {
          value: this.state[state].change,
          id: uniqid(),
        },
      });
    }
    console.log(this.state);
  };

  render() {
    const { name, email, cell, eduFormCount } = this.state;

    const educationForms = [];
    const educationData = [];
    for (let i = 1; i < eduFormCount + 1; i++) {
      educationForms.push(
        <EducationForm
          eduNum={i}
          eduSchoolEntry={this.state[`eduSchoolInput${i}`].change}
          eduTitleEntry={this.state[`eduTitleInput${i}`].change}
          eduDateEntry={this.state[`eduDateInput${i}`].change}
          handleChange={this.handleChange}
          key={uniqid()}
        />
      );
      educationData.push(
        `${this.state[`eduSchoolInput${i}`].value || ""} ${
          this.state[`eduTitleInput${i}`].value || ""
        } ${this.state[`eduDateInput${i}`].value || ""}`
      );
    }
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
                defaultValue={this.state[field.field].change}
                required
              />
            </div>
          ))}
          <div className="education-form-section">{educationForms}</div>;
          <button onClick={this.onAddMore}>Add More</button>
          <button type="submit">Submit</button>
        </form>
        <PersonalInfo fields={fields} name={name} email={email} cell={cell} />
        <Education eduFormCount={eduFormCount} educationData={educationData} />
      </div>
    );
  }
}
export default App;
