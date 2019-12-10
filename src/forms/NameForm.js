import React from 'react';

export const NameForm = () => {
  return (
    <form name="userInfo">
      <input name="firstName" type="text" placeholder="First Name" required />
      <input name="lastName" type="text" placeholder="Last Name" required />
    </form>
  );
};
