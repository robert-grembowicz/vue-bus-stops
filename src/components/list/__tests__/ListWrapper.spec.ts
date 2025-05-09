import { render } from "@testing-library/vue";
import ListWrapper from "../ListWrapper.vue";
import { nextTick } from "vue";

describe("ListWrapper", () => {
  beforeEach(() => {
    const main = document.createElement("main");
    main.style.paddingBottom = "40px";
    document.body.appendChild(main);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("renders slot and ARIA label", () => {
    const { getByRole } = render(ListWrapper, {
      props: {
        label: "Test List",
      },
      slots: {
        default: "<li>Item 1</li>",
      },
    });

    const listbox = getByRole("listbox");
    expect(listbox).toHaveAttribute("aria-label", "Test List");
    expect(listbox).toHaveTextContent("Item 1");
  });

  it("applies maxHeight prop if isFlexible is false", () => {
    const { container } = render(ListWrapper, {
      props: {
        label: "Test List",
        maxHeight: 200,
      },
    });

    const wrapper = container.querySelector(".wrapper") as HTMLElement;
    expect(wrapper.style.maxHeight).toBe("200px");
  });

  it("uses dynamicHeight if isFlexible is true", async () => {
    const { container } = render(ListWrapper, {
      props: {
        label: "Test List",
        isFlexible: true,
      },
    });

    const wrapper = container.querySelector(".wrapper") as HTMLElement;

    expect(wrapper.style.maxHeight).toMatch(/auto/);

    await nextTick();
    await nextTick();

    expect(wrapper.style.maxHeight).toMatch(/px/);
  });

  it("updates dynamicHeight on isFlexible change", async () => {
    const { container, rerender } = render(ListWrapper, {
      props: {
        label: "Test List",
        isFlexible: false,
      },
    });

    const wrapper = container.querySelector(".wrapper") as HTMLElement;
    expect(wrapper.style.maxHeight).toBe("");

    await rerender({ isFlexible: true });
    await nextTick();
    expect(wrapper.style.maxHeight).toMatch(/px/);
  });

  it("attaches and removes resize listener", async () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = render(ListWrapper, {
      props: {
        label: "Test List",
        isFlexible: true,
      },
    });

    await nextTick();
    expect(addSpy).toHaveBeenCalledWith("resize", expect.any(Function));

    unmount();
    expect(removeSpy).toHaveBeenCalledWith("resize", expect.any(Function));
  });
});
