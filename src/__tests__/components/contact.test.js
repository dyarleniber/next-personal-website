import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../../components/contact";

jest.mock("axios");

describe("Contact component", () => {
  it("submits the contact form", async () => {
    const promise = Promise.resolve({});

    axios.post.mockImplementation(() => promise);

    render(<Contact />);

    expect(screen.getByRole("heading")).toHaveTextContent("Contact");

    const email = "test@gmail.com";
    const message = "test message";

    userEvent.type(screen.getByPlaceholderText("you@email.com"), email);
    userEvent.type(
      screen.getByPlaceholderText(
        "Hey! I'm getting in touch to tell you about..."
      ),
      message
    );

    expect(
      screen.queryByText(
        "I have received your message, I will get in touch soon! Thank you!"
      )
    ).toBeNull();

    userEvent.click(screen.getByRole("button"));

    await act(() => promise);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("/api/contact", { email, message });

    expect(
      await screen.findByText(
        "I have received your message, I will get in touch soon! Thank you!"
      )
    ).toBeInTheDocument();
  });
});
