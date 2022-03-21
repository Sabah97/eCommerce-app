import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        style={{
          backgroundColor: "#f7dfff",
          padding: 20,
          borderRadius: 0,
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <p className="navbarItems" style={{ marginTop: 25 }}>
          Home
        </p>

        <p className="navbarItems" style={{ marginTop: 25 }}>
          Products
        </p>

        <p className="navbarItems" style={{ marginTop: 25 }}>
          Cart
        </p>
      </Menu>
    );
  }
}
