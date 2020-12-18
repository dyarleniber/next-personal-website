import { render, screen } from "@testing-library/react";
import Post from "../../components/post";

describe("Post component", () => {
  it("renders without crashing", () => {
    const postBody = "<p>test post body</p>";
    const postData = {
      published_at: "2021-01-01T00:00:00",
      edited_at: "2021-01-02T00:00:00",
      title: "test post title",
      cover_image: "http://testimage",
      body_html: postBody,
    };

    render(<Post data={postData} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(postData.title);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      postData.cover_image
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/blog");
    expect(screen.getByRole("article")).toContainHTML(postBody);
  });
});
