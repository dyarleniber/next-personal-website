import { render, screen } from "@testing-library/react";
import Hero from "../../components/hero";

describe("Hero component", () => {
  it("renders data without crashing", () => {
    const name = "test name";
    const email = "test@gmail.com";
    const bio = "test bio";
    const location = "test location";
    const socialmedia = [
      {
        name: "github",
        url: "https://github.com/",
        iconpath: "/images/icons/github.svg",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/",
        iconpath: "/images/icons/linkedin.svg",
      },
    ];

    render(
      <Hero
        name={name}
        email={email}
        bio={bio}
        location={location}
        socialmedia={socialmedia}
      />
    );

    expect(screen.getByText(name, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText(bio)).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
    socialmedia.forEach((link) => {
      expect(screen.getByAltText(link.name)).toBeInTheDocument();
    });
  });
});
