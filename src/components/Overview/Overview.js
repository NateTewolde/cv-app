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
        <h2>Personal Information</h2>
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
        <h2>Education</h2>
        <ul>{eduInputs}</ul>
      </div>
    );
  }
}

class Work extends Component {
  constructor(props) {
    super();

    this.props = props;
  }
  render() {
    const workInputs = [];
    for (let i = 0; i < this.props.workData.length; i++) {
      workInputs.push(<li key={uniqid()}>{this.props.workData[i]}</li>);
    }

    return (
      <div className="work-info">
        <h2>Work</h2>
        <ul>{workInputs}</ul>
      </div>
    );
  }
}

export { PersonalInfo, Education, Work };
