import React from "react";
import PropTypes from "prop-types";

const EmployeeDisplay = (props) => {
  console.log(props);
  const { id, name, age, dateOfBirth, salary, department, designation } = props;

  return (
    <>
      <p>{id}</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{dateOfBirth}</p>
      <p>{salary}</p>
      <p>{department}</p>
      <p>{designation}</p>
    </>
  );
};
export default EmployeeDisplay;
