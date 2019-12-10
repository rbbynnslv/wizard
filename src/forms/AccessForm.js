import React from 'react';

export const AccessForm = () => {
  return (
    <form name="levelForm">
      <input name="title" type="text" placeholder="Title" />
      <select name="accessLevel">
        <option>Employee</option>
        <option>Administrator</option>
      </select>
    </form>
  );
};
