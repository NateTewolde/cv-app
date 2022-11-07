import React, { Component } from "react";
import "./Overview.css";

class Overview extends Component {
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

export default Overview;
