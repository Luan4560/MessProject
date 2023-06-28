import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Box } from ".";
// Testes

// 1 - Precisa ter um imagem [x]
// 2 - Precisa ter o nome do produto [x]
// 3 - Precisa ter o valor do produto [x]
// 4 - Precisa ter um botão para compra

describe("Box component", () => {
  it("Should have a image of product", () => {
    const { getByRole } = render(<Box />);

    const imgElement = getByRole("img");

    expect(imgElement).toBeInTheDocument();
  });

  it("Should have name of product", () => {
    const { getByTestId } = render(<Box />);

    const titleText = getByTestId("title-product");
    const priceText = getByTestId("price-product");

    expect(titleText).toBeInTheDocument();
    expect(priceText).toBeInTheDocument();
  });

  it("Should have a buy button", () => {
    const { getByRole, getByText } = render(<Box />);

    const buttonElement = getByRole("button");
    const buttonText = getByText("Comprar");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});
