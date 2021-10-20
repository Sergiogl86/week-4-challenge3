import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import PanelInfo from "./PanelInfo";

describe("Given a PanelInfo component", () => {
  describe("When it receives a state true", () => {
    test("Then it should show Calling... on screen", () => {
      const state = true;
      const expected = "Calling...";

      render(<PanelInfo state={state} />);

      const result = screen.getByText(expected);

      expect(result).toBeInTheDocument();
    });
  });
  /* describe("When it receives a state false", () => {
    test("Then it should show none on screen", () => {
      const state = false;
      const notexpected = "Calling...";

      render(<PanelInfo state={state} />);

      expect(notexpected).not.toBeInTheDocument();
    });
  }); */
});
