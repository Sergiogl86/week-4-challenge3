import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Buton from "./Boton";

describe("Given a Boton component", () => {
  describe("When it receives a name and function", () => {
    test("Then it should call the recived function", () => {});
    const testFunction = jest.fn();

    render(
      <Buton
        nameText={"Hang"}
        className={"hang"}
        state={true}
        functionButton={testFunction}
      />
    );

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(testFunction).toHaveBeenCalled();
  });
});
