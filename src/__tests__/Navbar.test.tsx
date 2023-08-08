import { describe, it } from "vitest";
import Navbar from "../components/Navbar";
import { render } from "../utils/test-utils";

describe("App", () => {
  it("renders the Navbar component", () => {
    render(<Navbar />);
  });
});
