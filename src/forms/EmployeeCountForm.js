import React from 'react';

export const EmployeeCountForm = () => (
  <form name="numEmployees">
    <label for="numEmployees">Number of Employees</label>
    <select name="numEmployees">
      <option>1-50</option>
      <option>51-100</option>
      <option>101-500</option>
      <option>501-1000</option>
      <option>>1000</option>
    </select>
  </form>
);
