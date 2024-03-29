import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Context from "../Context/Context";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it receives a Key value and function", () => {
    test("Then it should call the recived function", () => {
      const setNumeroTelefono = jest.fn();
      const setCallState = jest.fn();
      const numeroTelefono = "12345678";
      const hangState = false;
      const keyValue = 5;

      render(
        <Context.Provider
          value={{ setNumeroTelefono, numeroTelefono, setCallState, hangState }}
        >
          <Key key={keyValue} numero={keyValue} />
        </Context.Provider>
      );

      const KeyButton = screen.getByRole("button");
      screen.debug();
      userEvent.click(KeyButton);

      expect(setCallState).toHaveBeenCalled();
    });
  });
  describe("When it receives a Key value 5 and function", () => {
    test("Then it should put 5 in the text button", () => {
      const setCallState = jest.fn();
      const numeroTelefono = "12345678";
      const setNumeroTelefono = jest.fn();
      const hangState = false;
      const keyValue = "5";

      const expectedValue = "5";

      render(
        <Context.Provider
          value={{ setNumeroTelefono, numeroTelefono, setCallState, hangState }}
        >
          <Key key={keyValue} numero={keyValue} />
        </Context.Provider>
      );

      const KeyButton = screen.getByRole("button");
      screen.debug();

      const result = KeyButton.innerHTML;

      expect(result).toEqual(expectedValue);
    });
  });
});
