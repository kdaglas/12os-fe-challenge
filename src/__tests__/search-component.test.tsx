import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import SearchComponent from '../components/SearchComponent';


describe("Search Component tests", () => {

  beforeEach(() => {
  })

  it('renders title in the component', () => {
    render(<SearchComponent />);
    const textElement = screen.getByText(/Search movies, series & more.../i);
    expect(textElement).toBeInTheDocument();
  });

  it("renders placeholder in component", () => {
    render(<SearchComponent />);
    const searchInputElement = screen.getByPlaceholderText(/Search for a movie, a serie or an animation.../i);
    expect(searchInputElement).toBeInTheDocument();
  });

  it("button should be rendered", () => {
    render(<SearchComponent />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("search input should be empty", () => {
    render(<SearchComponent />);
    const searchInputElement = screen.getByPlaceholderText(/Search for a movie, a serie or an animation.../i) as HTMLInputElement;
    expect(searchInputElement.value).toBe("");
  });

  it("search input should change", () => {
    render(<SearchComponent />);
    const searchInputElement = screen.getByPlaceholderText(/Search for a movie, a serie or an animation.../i) as HTMLInputElement;
    const testValue = "man";

    fireEvent.change(searchInputElement, { target: { value: testValue } });
    expect(searchInputElement.value).toBe(testValue);
  });

  it("error message should not be visible", () => {
    render(<SearchComponent />);
    const errorElement = screen.getByTestId("error");
    expect(errorElement).not.toBeVisible();
  });

})

