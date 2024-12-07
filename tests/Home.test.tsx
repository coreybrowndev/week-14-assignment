import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../src/app/page";

describe("Home Page", () => {
  it("loads up the home page, submits a number, and verifies the input display has 40", async () => {
    render(<Home />);

    const inputNumber = screen.getByTestId("input-number");
    const submitButton = screen.getByTestId("submit-button");

    await userEvent.type(inputNumber, "40");

    // Click the submit button
    await userEvent.click(submitButton);

    // Verify the display input contains "40"
    const displayNumber = screen.getByTestId("display-number");
    expect(displayNumber).toHaveValue("40");
  });
});
