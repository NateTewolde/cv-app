import React from "react";
import uniqid from "uniqid";

const EducationForm = ({
  eduNum,
  eduSchoolEntry,
  eduTitleEntry,
  eduDateEntry,
  handleChange,
}) => {
  return (
    <div key={uniqid()}>
      <label htmlFor="education">School:</label>
      <input
        onBlur={handleChange}
        type="text"
        id={`eduSchoolInput${eduNum}`}
        defaultValue={eduSchoolEntry}
      />

      <label htmlFor="education">Study:</label>
      <input
        onBlur={handleChange}
        type="text"
        id={`eduTitleInput${eduNum}`}
        defaultValue={eduTitleEntry}
      />

      <label htmlFor="education">Date:</label>
      <input
        onBlur={handleChange}
        type="date"
        id={`eduDateInput${eduNum}`}
        defaultValue={eduDateEntry}
      />
    </div>
  );
};

export default EducationForm;
