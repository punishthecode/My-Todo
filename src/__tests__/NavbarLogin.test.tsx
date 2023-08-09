import { describe, it, vi } from "vitest";
import Navbar from "../components/Navbar";
import { render } from "../utils/test-utils";

// Mock useAuth0 hook
vi.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    isAuthenticated: false,
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  }),
}));

describe("Navbar", () => {
  it("renders the login button when not authenticated", () => {
    const { getByText } = render(<Navbar />);
    const loginButton = getByText("Login");
    expect(loginButton).toBeDefined();
  });
});
