import React from "react";
import uniqid from "uniqid";

const WorkForm = ({
  workNum,
  workNameEntry,
  workTitleEntry,
  workTasksEntry,
  workStartDateEntry,
  workEndDateEntry,
  handleChange,
}) => {
  return (
    <div key={uniqid()}>
      <label htmlFor="work">Company:</label>
      <input
        onBlur={handleChange}
        type="text"
        id={`workNameInput${workNum}`}
        defaultValue={workNameEntry}
      />

      <label htmlFor="work">Title:</label>
      <input
        onBlur={handleChange}
        type="text"
        id={`workTitleInput${workNum}`}
        defaultValue={workTitleEntry}
      />

      <label htmlFor="work">Tasks:</label>
      <input
        onBlur={handleChange}
        type="text"
        id={`workTasksInput${workNum}`}
        defaultValue={workTasksEntry}
      />

      <label htmlFor="work">Start Date:</label>
      <input
        onBlur={handleChange}
        type="date"
        id={`workStartDateInput${workNum}`}
        defaultValue={workStartDateEntry}
      />

      <label htmlFor="work">End Date:</label>
      <input
        onBlur={handleChange}
        type="date"
        id={`workEndDateInput${workNum}`}
        defaultValue={workEndDateEntry}
      />
    </div>
  );
};

export default WorkForm;
