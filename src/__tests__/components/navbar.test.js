import { render, screen } from "@testing-library/react";
import Navbar from "../../components/navbar";

describe("Navbar component", () => {
  it("renders navbar links without crashing", () => {
    render(<Navbar />);

    expect(screen.getByText("Home")).toHaveAttribute("href", "#home");
    expect(screen.getByText("Contact")).toHaveAttribute("href", "#contact");
    expect(screen.getByText("Blog")).toHaveAttribute("href", "/blog");
  });

  it("renders blog navbar links without crashing", () => {
    const name = "test name";

    render(<Navbar blog name={name} />);

    expect(screen.getByText(name)).toHaveAttribute("href", "/");
  });
});
