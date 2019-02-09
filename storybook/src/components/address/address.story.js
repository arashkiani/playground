import React from "react";
import { storiesOf } from "@storybook/react";
import Address from "./index";
import SpacingWrapper from "../../stories/SpacingWrapper";

storiesOf("Components/Address", module)
  .addDecorator(story => <SpacingWrapper>{story()}</SpacingWrapper>)
  .add("Default", () => (
    <Address
      lines={[
        "Great Ormond Street Hospital for Children NHS Foundation Trust,",
        "Levels 4-6,",
        "Barclay House,",
        "37 Queen Square,",
        "",
        "London WC1N 3BH"
      ]}
    />
  ));
