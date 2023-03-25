import { useContext } from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import MoviesComponent from '../components/MoviesComponent';
import { act } from 'react-dom/test-utils';

import MovieProvider, { MovieContext } from '../context/MovieContext';

jest.mock('axios');



describe("Movie Component tests", () => {

    beforeEach(() => {
    })

    it('renders not found text in the component', () => {
        render(<MoviesComponent />);
        const textElement = screen.getByText(/Oops! Kuky films says:/i);
        expect(textElement).toBeInTheDocument();
    });

    it("checks if not found image is displayed", () => {
        render(<MoviesComponent />);
        const notFoundImageElement = screen.getByRole("img");
        fireEvent.click(notFoundImageElement);
        expect(notFoundImageElement).toBeInTheDocument();
    });

    it("list movies on change", async () => {

        const TestComponet = () => {

            const { page, setPage } = useContext(MovieContext)

            const changePage = () => {
                setPage(3)
            }

            return (
                <>
                    <div data-testid="value">{page}</div>
                    <button onClick={changePage}>changer</button>
                </>
            )
        }


        render(
            <MovieProvider>
                {/* <MoviesComponent /> */}
                <TestComponet />
            </MovieProvider>
        )

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(() => {

            expect(screen.getByTestId("value").textContent).toEqual("1")

            const btn2Element = screen.getByRole("button", { name: "changer" });
            const valueElement = Number(screen.getByTestId("value").textContent);
            expect(valueElement).toEqual(1);

            fireEvent.click(btn2Element);
            const valueElement2 = Number(screen.getByTestId("value").textContent);
            expect(valueElement2).toEqual(1);
        })

    });

})
