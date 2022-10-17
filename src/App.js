import React, { Component } from "react";

// Display Array of object and display data in UI.

// Create a object and update its data on click of a button and display data in UI
class App extends Component {
  state = {
    carBrand: "Volvo",
    modelSeries: "S60",
    version: "Polestart",
    fuelType: "Petrol",
    Transmission: "Automatic",
  };

  stateArray = { employeeData: ["Joseph", "Eunice", "Sophia"] };

  handleClick = () => {
    this.setState({
      version: "Momentum",
      fuelType: "Diesel",
    });
  };

  render() {
    return (
      <div>
        Check out my new car! It is a {this.state.carBrand}{" "}
        {this.state.modelSeries} {this.state.tranmission} car, version{" "}
        {this.state.version}, which runs on {this.state.fuelType}.
        <button onClick={this.handleClick}>Update</button>
        {this.stateArray.employeeData.map((info) => {
          return <div>{info}</div>;
        })}
      </div>
    );
  }
}
export default App;
