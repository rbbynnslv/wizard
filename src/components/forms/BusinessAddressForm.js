import React from 'react';

export const BusinessAddressForm = () => (
  <form name="businessAddressForm">
    <fieldset>
      <legend>Business Address</legend>
      <input name="street" type="text" placeholder="Street" />
      <input name="city" type="text" placeholder="City" />
      <input name="postalCode" type="text" placeholder="Postal Code" />
      <select name="country" placeholder="country">
        <option>U.S.A.</option>
        <option>Philippines</option>
      </select>
    </fieldset>
  </form>
);
