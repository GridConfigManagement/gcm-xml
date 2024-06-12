import { describe, expect, test } from "@jest/globals";

import { getChildElementsByTagName } from "../src/get-child-elements-by-tagname";

describe("getChildElementsByTagName", () => {
  const doc: XMLDocument = new DOMParser().parseFromString(
    "<Document><Parent><Child name='Child 1' /><Child name='Child 2' /><GrandChild /></Parent></Document>",
    "application/xml"
  );

  test("Should get children", () => {
    const children = getChildElementsByTagName(
      doc.querySelector("Parent"),
      "Child"
    );

    expect(children.length).toBe(2);
    expect(children.map((child) => child.getAttribute("name"))).toEqual([
      "Child 1",
      "Child 2",
    ]);
  });

  test("Should return empty list when no children are found", () => {
    const children = getChildElementsByTagName(
      doc.querySelector("Document"),
      "Child"
    );

    expect(children.length).toBe(0);
  });
});
