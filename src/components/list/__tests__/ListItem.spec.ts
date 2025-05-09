import { render, RenderResult } from "@testing-library/vue";
import ListItem from "../ListItem.vue";

describe("ListItem", () => {
  let utils: RenderResult;

  describe("with default props", () => {
    beforeEach(() => {
      utils = render(ListItem, {
        slots: {
          default: "Hello World",
        },
      });
    });

    it("renders slot content", () => {
      const { getByText } = utils;
      expect(getByText("Hello World")).toBeInTheDocument();
    });

    it("renders default attributes", () => {
      const { getByRole } = utils;
      const item = getByRole("text");
      expect(item).toHaveAttribute("aria-selected", "false");
      expect(item).not.toHaveClass("selected");
      expect(item).not.toHaveClass("list-group-item-action");
    });
  });

  describe("with custom props", () => {
    beforeEach(() => {
      utils = render(ListItem, {
        props: {
          role: "option",
          isSelected: true,
        },
        slots: {
          default: "Option A",
        },
      });
    });

    it("applies role and aria-selected", () => {
      const { getByRole } = utils;
      const item = getByRole("option");
      expect(item).toHaveAttribute("aria-selected", "true");
      expect(item).toHaveClass("selected");
      expect(item).toHaveClass("list-group-item-action");
    });
  });
});
