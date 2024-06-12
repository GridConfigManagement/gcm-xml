import { describe, expect, test } from "@jest/globals";

import { createElement } from "../src/create-element";

describe("createElement", () => {
  const doc: XMLDocument = new DOMParser().parseFromString(
    "<Document />",
    "application/xml"
  );

  test("Should create element", () => {
    const res: Element = createElement(doc, "Child");

    expect(res.tagName.toLowerCase()).toBe("child");
  });

  test("Should add given attributes", () => {
    const res: Element = createElement(doc, "Child", {
      firstName: "John",
      lastName: "Doe",
    });

    expect(res.getAttribute("firstName")).toEqual("John");
    expect(res.getAttribute("lastName")).toEqual("Doe");
  });

  test("Should not add given attribute when value is missing", () => {
    const res: Element = createElement(doc, "Child", {
      name: null,
    });

    expect(res.hasAttribute("name")).toBeFalsy();
  });
});
