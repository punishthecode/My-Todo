import { describe, it, vi } from "vitest";
import Navbar from "../components/Navbar";
import { render } from "../utils/test-utils";

// Mock useAuth0 hook
vi.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    isAuthenticated: true,
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  }),
}));

describe("Navbar", () => {
  it("renders the welcome message and logout button when authenticated", () => {
    const { getByText } = render(<Navbar />, {
      useAuth0: () => ({ isAuthenticated: true }),
    });
    const welcomeMessage = getByText("Welcome, you are logged in!");
    const logoutButton = getByText("Logout");
    expect(welcomeMessage).toBeDefined();
    expect(logoutButton).toBeDefined();
  });
});
