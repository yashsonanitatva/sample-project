import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withNextRouter } from "./nextRouterDecorator";
import globalDecorator from "./globalDecorator";
import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return (
      <div>
        <img {...props} />
      </div>
    );
  },
});

addDecorator(withKnobs);
addDecorator(globalDecorator);
addDecorator(withNextRouter);

export const parameters = {
  layout: "fullscreen",
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
