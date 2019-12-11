import React from 'react';

export const TitleAndAccessForm = () => {
  return (
    <form name="titleAndAccessForm">
      <input type="text" placeholder="Job Title" />
      <select>
        <option>Administrator</option>
        <option>Employee</option>
      </select>
    </form>
  );
};
