import { describe, it } from "vitest";
import LoginNotice from "../components/LoginNotice";
import { render } from "../utils/test-utils";

describe("App", () => {
  it("renders the LoginNotice component", () => {
    render(<LoginNotice />);
  });
});
