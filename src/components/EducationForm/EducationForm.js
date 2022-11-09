import React, { Component } from "react";
import uniqid from "uniqid";

class EducationForm extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div key={uniqid()}>
        <label htmlFor="education">School</label>
        <input
          onBlur={this.props.handleChange}
          type="text"
          id={`eduSchoolInput${this.props.eduNum}`}
          defaultValue={this.props.eduSchoolEntry}
        />
        <label htmlFor="education">Study</label>
        <input type="text" id="eduTitleInput" />
        <label htmlFor="education">Date</label>
        <input type="date" id="eduDateInput" />
      </div>
    );
  }
}

export default EducationForm;
