import { describe, it } from "vitest";
import App from "./App";
import { render } from "./utils/test-utils";

describe("Test of test", () => {
  it("renders the App component", () => {
    render(<App greeting="Hello World" />);
  });
});
