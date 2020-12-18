import { render, screen } from "@testing-library/react";
import Footer from "../../components/footer";

describe("Footer component", () => {
  it("renders name without crashing", () => {
    const name = "test name";

    render(<Footer name={name} />);

    expect(screen.getByText(name, { exact: false })).toBeInTheDocument();
  });
});
