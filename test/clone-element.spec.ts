import { describe, expect, test } from "@jest/globals";

import { cloneElement } from "../src/clone-element";

describe("cloneElement", () => {
  const doc: XMLDocument = new DOMParser().parseFromString(
    "<Document />",
    "application/xml"
  );

  let el: Element;

  beforeEach(() => {
    el = doc.createElement("p");
  });
  test("Should clone given element", () => {
    const res: Element = cloneElement(el);

    expect(res.tagName.toLowerCase()).toBe("p");
    expect(res.outerHTML).toEqual(el.outerHTML);
  });

  test("Should copy existing attributes", () => {
    el.setAttribute("data-name", "John Doe");

    const res: Element = cloneElement(el);

    expect(res.getAttributeNames()).toEqual(el.getAttributeNames());
    expect(res.getAttribute("data-name")).toEqual(el.getAttribute("data-name"));
  });

  test("Should add newly given attributes", () => {
    const res: Element = cloneElement(el, {
      "data-name": "John Doe",
    });

    expect(res.getAttribute("data-name")).toEqual("John Doe");
  });

  test("Should override attribute with given attribute", () => {
    el.setAttribute("data-name", "John Doe");

    const res: Element = cloneElement(el, {
      "data-name": "Jane Doe",
    });

    expect(res.getAttribute("data-name")).toEqual("Jane Doe");
  });

  test("Should remove attribute if value isn't set", () => {
    el.setAttribute("data-name", "John Doe");

    const res: Element = cloneElement(el, {
      "data-name": null,
    });

    expect(res.hasAttribute("data-name")).toBeFalsy();
  });
});
