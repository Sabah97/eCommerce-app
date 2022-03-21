import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ButtonExampleAnimated = () => (
  <div>
    <Button
      style={{ width: "100%", borderRadius: 0, backgroundColor: "#c67edf" }}
      animated="vertical"
    >
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name="shop" />
      </Button.Content>
    </Button>
  </div>
);

export default ButtonExampleAnimated;
