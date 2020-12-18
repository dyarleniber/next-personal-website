import { render, screen } from "@testing-library/react";
import Alert from "../../components/alert";

describe("Alert component", () => {
  it("renders message without crashing", () => {
    const message = "test message";

    render(<Alert message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
