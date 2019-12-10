import React from 'react';

export const IndustryForm = () => (
  <form name="industryForm">
    <label for="industry">Industry</label>
    <select name="industry">
      <option>Enterprise Software</option>
      <option>Sales</option>
      <option>Marketing</option>
      <option>Ecommerce</option>
      <option>Construction</option>
      <option>Logistics</option>
      <option>SAAS</option>
      <option>Telephony</option>
      <option>Consumer Electronics</option>
      <option>Transportation</option>
    </select>
    <fieldset>
      <legend>Publicly Traded?</legend>
      <label>
        <input type="radio" name="tradeStatus" value="yes" />
        Yes
      </label>
      <label>
        <input type="radio" name="tradeStatus" value="no" />
        No
      </label>
    </fieldset>
  </form>
);
