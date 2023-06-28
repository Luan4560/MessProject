import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from ".";

describe("Header Component", () => {
  it("Should render header", () => {
    const { getByTestId } = render(<Header />);

    const headerElement = getByTestId("header");

    expect(headerElement).toBeInTheDocument();
  });

  it("Should have a logo on header", () => {
    const { getByTestId } = render(<Header />);

    const headerElement = getByTestId("logo");

    expect(headerElement).toBeInTheDocument();
  });

  it("Should have a list navigation on header", () => {
    const { getByRole } = render(<Header />);

    const headerElement = getByRole("list");

    expect(headerElement).toBeInTheDocument();
  });

  it("Should have Home, Contact and About on navigation", () => {
    const { getByText } = render(<Header />);

    const homeText = getByText("Home");
    const contactText = getByText("Contact");
    const aboutUsText = getByText("About Us");

    expect(homeText).toBeInTheDocument();
    expect(contactText).toBeInTheDocument();
    expect(aboutUsText).toBeInTheDocument();
  });
});
