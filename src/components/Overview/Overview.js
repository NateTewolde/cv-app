import React, { Component } from "react";
import "./Overview.css";
import uniqid from "uniqid";

class PersonalInfo extends Component {
  constructor(props) {
    super();

    this.props = props;
  }
  render() {
    return (
      <div className="personal-info">
        <h1>Personal Information</h1>
        <ul>
          {this.props.fields.map((field) => {
            return (
              <li key={this.props[field.field].id}>
                {this.props[field.field].value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class Education extends Component {
  constructor(props) {
    super();

    this.props = props;
  }
  render() {
    const eduInputs = [];
    for (let i = 0; i < this.props.educationData.length; i++) {
      eduInputs.push(<li key={uniqid()}>{this.props.educationData[i]}</li>);
    }

    return (
      <div className="education-info">
        <h1>Education</h1>
        <ul>{eduInputs}</ul>
      </div>
    );
  }
}

export { PersonalInfo, Education };
