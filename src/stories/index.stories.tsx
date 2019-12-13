import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
//import { linkTo } from "@storybook/addon-links";
import { RoundedButton } from "../components/RoundedButton";
import Avatar from "../components/avatar";
//import { Welcome } from "@storybook/react/demo";
// storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("RoundedButton")} />);

storiesOf("RoundedButton", module)
  .add(
    "with text",
    () => (
      <RoundedButton color="hotpink" onClick={action("clicked")}>
        Hello Button
      </RoundedButton>
    ),
    { info: { inline: true } }
  )
  .add(
    "with some emoji",
    () => (
      <Avatar
        size={120}
      />
    ),
    { info: { inline: true } }
  );
