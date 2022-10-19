import React, { Component } from "react";
import EmployeeDisplay from "./EmployeeDisplay";

class EmployeeData extends Component {
  state = {
    employee: [
      {
        id: "1",
        name: "Grace Kelly",
        age: 34,
        dateOfBirth: "16/07/1988",
        salary: 3500,
        department: "Accounts",
        designation: "Accounts Executive",
        photo:
          "https://image.shutterstock.com/image-photo/small-business-owners-women-entrepreneurs-260nw-1851497557.jpg",
      },
    ],
  };
  render() {
    return (
      <>
        <EmployeeDisplay
          id={this.state.employee.id}
          name={this.state.employee.name}
          age={this.state.employee.age}
          dateOfBirth={this.state.employee.dateOfBirth}
          salary={this.state.employee.salary}
          department={this.state.employee.department}
          designation={this.state.employee.designation}
        />
      </>
    );
  }
}
export default EmployeeData;
