import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from ".";

describe("Button Component", () => {
  it("Should render Button correctly", () => {
    const { getByText, getByRole, debug } = render(<Button>Button</Button>);

    const buttonElement = getByRole("button");
    const buttonText = getByText("Button");

    expect(buttonText).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it(`Should render 'Carregando...' text when isLoading is true`, () => {
    const { getByText } = render(<Button isLoading>Button</Button>);

    const isLoadingText = getByText("Carregando...");

    expect(isLoadingText).toBeInTheDocument();
  });

  it("Should render the button with background color #43aaff by default", () => {
    const { getByRole } = render(<Button>Button</Button>);

    const buttonElement = getByRole("button");

    expect(buttonElement).toHaveStyle({
      backgroundColor: "#43aaff",
    });
  });

  it("Should render the button with background color red when color=#FF1dd was passed", () => {
    const { getByRole } = render(<Button color="#FF1dd">Button</Button>);

    const buttonElement = getByRole("button");

    expect(buttonElement).toHaveStyle({
      backgroundColor: "#FF1dd",
    });
  });
});
