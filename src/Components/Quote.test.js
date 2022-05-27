import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Quote from "./Quote";

describe("Quote component", () => {
  test("renders button that generates new quote", () => {
    render(<Quote />);
    const linkElement = screen.getByTestId("new-quote-button");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders quote text and author", async () => {
    //Arrange

    // Act
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          text: "Test Quote",
          author: "Test Author",
        },
      ],
    });

    render(<Quote />);

    const quote = await screen.findByTestId("quote-text");
    const author = await screen.findByTestId("quote-author");
    //Assert
    expect(quote).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });
});
