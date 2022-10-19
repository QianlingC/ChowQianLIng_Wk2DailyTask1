import React, { Component } from "react";
import ItemDisplay from "./ItemDisplay";

class ItemData extends Component {
  state = {
    grocery: [
      {
        id: "1",
        name: "Apple",
        price: 15,
      },
      {
        id: "2",
        name: "Chicken",
        price: 25,
      },
      {
        id: "3",
        name: "Noodles",
        price: 20,
      },
    ],
  };
  render() {
    return (
      <>
        <ItemDisplay
          id={this.state.grocery.id}
          name={this.state.grocery.name}
          price={this.state.grocery.price}
        />
      </>
    );
  }
}
export default ItemData;
