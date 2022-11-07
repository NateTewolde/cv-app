import React, { Component } from "react";
import uniqid from "uniqid";

class EducationForm extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  getEducationForm = () => {
    return (
      <div key={uniqid()}>
        <label htmlFor="education">School/Training</label>
        <input onChange={this.handleChange} type="text" id="education-input" />
      </div>
    );
  };

  render() {
    const educationForms = [];
    for (let i = 0; i < this.props.eduFormCount; i++) {
      educationForms.push(this.getEducationForm());
    }
    return <div className="education-form-section">{educationForms}</div>;
  }
}

export default EducationForm;
