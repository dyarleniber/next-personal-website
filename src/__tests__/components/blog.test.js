import { render, screen } from "@testing-library/react";
import Blog from "../../components/blog";
import useDevPosts from "../../hooks/useDevPosts";

jest.mock("../../hooks/useDevPosts");

describe("Blog component", () => {
  afterEach(() => {
    useDevPosts.mockClear();
  });

  it("renders posts without crashing", () => {
    const posts = [
      {
        id: "1",
        slug: "post-1",
        title: "Post 1 title",
        description: "Post 1 description",
        published_at: "2021-01-01T00:00:00",
      },
      {
        id: "2",
        slug: "post-2",
        title: "Post 2 title",
        description: "Post 2 description",
        published_at: "2021-01-01T00:00:00",
      },
    ];

    useDevPosts.mockImplementation(() => {
      return {
        posts,
        isLoading: false,
        isError: false,
        isValidating: false,
        size: 0,
        setSize: jest.fn(),
        mutate: jest.fn(),
        isEmpty: false,
        isLoadingMore: false,
        isReachingEnd: true,
      };
    });

    render(<Blog />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("Latest posts");

    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.description)).toBeInTheDocument();
    });
  });
});
