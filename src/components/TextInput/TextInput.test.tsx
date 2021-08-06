import React from "react";

import { render } from "@test/utils";
import TextInput from "./TextInput";

test("TextInput Test", () => {
  const { getByTestId, getByLabelText, container } = render(
    <TextInput
      name="test"
      value="Hello"
      label="Testing"
      infoLabel="I am in info"
    />
  );

  const textInputNode = getByTestId("input-test");
  const leftAccessoryNode = getByTestId("input-test-left-accessory-container");
  const infoLabelNode = getByTestId("input-test-info-label");
  const input = getByLabelText("Testing") as HTMLInputElement;

  expect(textInputNode).toBeInTheDocument();
  expect(leftAccessoryNode).toBeInTheDocument();
  expect(infoLabelNode).toBeInTheDocument();

  expect(input.value).toBe("Hello");

  expect(container).toMatchSnapshot();
});
