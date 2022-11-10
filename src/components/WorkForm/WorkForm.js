import React, { Component } from "react";
import uniqid from "uniqid";

class WorkForm extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div key={uniqid()}>
        <label htmlFor="work">Company:</label>
        <input
          onBlur={this.props.handleChange}
          type="text"
          id={`workNameInput${this.props.workNum}`}
          defaultValue={this.props.workNameEntry}
        />

        <label htmlFor="work">Title:</label>
        <input
          onBlur={this.props.handleChange}
          type="text"
          id={`workTitleInput${this.props.workNum}`}
          defaultValue={this.props.workTitleEntry}
        />

        <label htmlFor="work">Tasks:</label>
        <input
          onBlur={this.props.handleChange}
          type="text"
          id={`workTasksInput${this.props.workNum}`}
          defaultValue={this.props.workTasksEntry}
        />

        <label htmlFor="work">Start Date:</label>
        <input
          onBlur={this.props.handleChange}
          type="date"
          id={`workStartDateInput${this.props.workNum}`}
          defaultValue={this.props.workStartDateEntry}
        />

        <label htmlFor="work">End Date:</label>
        <input
          onBlur={this.props.handleChange}
          type="date"
          id={`workEndDateInput${this.props.workNum}`}
          defaultValue={this.props.workEndDateEntry}
        />
      </div>
    );
  }
}

export default WorkForm;
