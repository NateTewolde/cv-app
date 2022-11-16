import React, { Component } from "react";
import uniqid from "uniqid";
import "./App.css";
import EducationForm from "../EducationForm/EducationForm";
import WorkForm from "../WorkForm/WorkForm";
import { PersonalInfo, Education, Work } from "../Overview/Overview";

const fields = [
  { field: "name", type: "text", id: uniqid() },
  { field: "email", type: "email", id: uniqid() },
  { field: "cell", type: "tel", id: uniqid() },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { change: "pp head", id: uniqid() },
      email: { change: "email@email.com", id: uniqid() },
      cell: { change: "555-555-5555", id: uniqid() },
      eduFormCount: 1,
      eduSchoolInput1: { value: "", change: "", id: uniqid() },
      eduTitleInput1: { value: "", change: "", id: uniqid() },
      eduDateInput1: { value: "", change: "", id: uniqid() },
      workFormCount: 1,
      workNameInput1: { value: "", change: "", id: uniqid() },
      workTitleInput1: { value: "", change: "", id: uniqid() },
      workTasksInput1: { value: "", change: "", id: uniqid() },
      workStartDateInput1: { value: "", change: "", id: uniqid() },
      workEndDateInput1: { value: "", change: "", id: uniqid() },
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: {
        value: this.state[e.target.id].value,
        change: e.target.value,
        id: uniqid(),
      },
    });
  };

  onAddMoreEdu = (e) => {
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

  onAddMoreWork = (e) => {
    e.preventDefault();
    this.setState({
      [`workNameInput${this.state.workFormCount + 1}`]: {
        value: "",
        change: "",
        id: uniqid(),
      },
      [`workTitleInput${this.state.workFormCount + 1}`]: {
        value: "",
        change: "",
        id: uniqid(),
      },
      [`workTasksInput${this.state.workFormCount + 1}`]: {
        value: "",
        change: "",
        id: uniqid(),
      },
      [`workStartDateInput${this.state.workFormCount + 1}`]: {
        value: "",
        change: "",
        id: uniqid(),
      },
      [`workEndDateInput${this.state.workFormCount + 1}`]: {
        value: "",
        change: "",
        id: uniqid(),
      },
      workFormCount: this.state.workFormCount + 1,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    for (const field in this.state) {
      if (field === `eduFormCount` || field === "workFormCount") {
        this.setState({
          [field]: this.state[field],
        });
        continue;
      }
      this.setState({
        [field]: {
          value: this.state[field].change,
          change: "",
          id: uniqid(),
        },
      });
    }
    console.log(this.state);
  };

  onEdit = () => {
    for (const field in this.state) {
      if (field === `eduFormCount` || field === "workFormCount") {
        this.setState({
          [field]: this.state[field],
        });
        continue;
      }
      this.setState({
        [field]: {
          value: this.state[field].value,
          change: this.state[field].value,
          id: uniqid(),
        },
      });
    }
  };

  render() {
    const { name, email, cell, eduFormCount, workFormCount } = this.state;

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

    const workForms = [];
    const workData = [];
    for (let j = 1; j < workFormCount + 1; j++) {
      workForms.push(
        <WorkForm
          workNum={j}
          workNameEntry={this.state[`workNameInput${j}`].change}
          workTitleEntry={this.state[`workTitleInput${j}`].change}
          workTasksEntry={this.state[`workTasksInput${j}`].change}
          workStartDateEntry={this.state[`workStartDateInput${j}`].change}
          workEndDateEntry={this.state[`workEndDateInput${j}`].change}
          handleChange={this.handleChange}
          key={uniqid()}
        />
      );
      workData.push(
        `${this.state[`workNameInput${j}`].value || ""} ${
          this.state[`workTitleInput${j}`].value || ""
        } ${this.state[`workTasksInput${j}`].value || ""} ${
          this.state[`workStartDateInput${j}`].value || ""
        } ${this.state[`workEndDateInput${j}`].value || ""}`
      );
    }

    return (
      <div className="wrapper">
        <div className="header">
          <h1>Resume Maker</h1>
        </div>
        <form onSubmit={this.onSubmitForm}>
          <div className="personal-form-section">
            <h3>Basic Info: </h3>
            {fields.map((field) => (
              <span className="field" key={field.id}>
                <label htmlFor={field.field}>
                  {field.field[0].toUpperCase() + field.field.slice(1)}:{" "}
                </label>
                <input
                  onChange={this.handleChange}
                  type={field.type}
                  id={field.field}
                  value={this.state[field.field].change}
                  required
                />
              </span>
            ))}
          </div>
          <div className="education-form-section">
            <h3>Education Info: </h3>

            {educationForms}
          </div>
          <button onClick={this.onAddMoreEdu}>Add More Education</button>

          <div className="work-form-section">
            <h3>Work History Info: </h3>

            {workForms}
          </div>
          <button onClick={this.onAddMoreWork}>Add More Work</button>

          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
        <PersonalInfo name={name} email={email} cell={cell} />
        <Education educationData={educationData} />
        <Work workData={workData} />
        <div className="edit-btn">
          <button onClick={this.onEdit}>Edit</button>
        </div>
      </div>
    );
  }
}
export default App;
