import React, { useEffect, useState } from "react";
import "./Overview.css";
import uniqid from "uniqid";

const PersonalInfo = ({ name, email, cell }) => {
  const [personalInputs, setPersonalInputs] = useState([]);

  useEffect(() => {
    const personalInputsTracker = [];

    personalInputsTracker.push(<li key={uniqid()}>{name.value}</li>);
    personalInputsTracker.push(<li key={uniqid()}>{email.value}</li>);
    personalInputsTracker.push(<li key={uniqid()}>{cell.value}</li>);
    setPersonalInputs(personalInputsTracker);
  }, [name.value, email.value, cell.value]);

  return (
    <div className="personal-info">
      <h2>Personal Information</h2>
      <ul>{personalInputs}</ul>
    </div>
  );
};

const Education = ({ educationData }) => {
  const [eduInputs, setEduInputs] = useState([]);

  useEffect(() => {
    const eduInputsTracker = [];
    for (let i = 0; i < educationData.length; i++) {
      eduInputsTracker.push(<li key={uniqid()}>{educationData[i]}</li>);
    }
    setEduInputs(eduInputsTracker);
  }, [educationData]);

  return (
    <div className="education-info">
      <h2>Education</h2>
      <ul>{eduInputs}</ul>
    </div>
  );
};

const Work = ({ workData }) => {
  const [workInputs, setWorkInputs] = useState([]);
  useEffect(() => {
    const workInputsTracker = [];
    for (let i = 0; i < workData.length; i++) {
      workInputsTracker.push(<li key={uniqid()}>{workData[i]}</li>);
    }
    setWorkInputs(workInputsTracker);
  }, [workData]);

  return (
    <div className="work-info">
      <h2>Work</h2>
      <ul>{workInputs}</ul>
    </div>
  );
};

export { PersonalInfo, Education, Work };
