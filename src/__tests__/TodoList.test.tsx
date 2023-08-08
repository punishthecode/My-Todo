import { describe, it } from "vitest";
import TodoList from "../components/TodoList";
import { render } from "../utils/test-utils";

describe("App", () => {
  it("renders the TodoList component", () => {
    render(<TodoList />);
  });
});
