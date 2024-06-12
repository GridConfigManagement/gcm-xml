"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const get_child_elements_by_tagname_1 = require("../src/get-child-elements-by-tagname");
(0, globals_1.describe)("getChildElementsByTagName", () => {
    const doc = new DOMParser().parseFromString("<Document><Parent><Child name='Child 1' /><Child name='Child 2' /></Parent></Document>", "application/xml");
    (0, globals_1.test)("Should get children", () => {
        const children = (0, get_child_elements_by_tagname_1.getChildElementsByTagName)(doc.querySelector("Parent"), "Child");
        (0, globals_1.expect)(children.length).toBe(2);
        (0, globals_1.expect)(children.map((child) => child.getAttribute("name"))).toEqual([
            "Child 1",
            "Child 2",
        ]);
    });
    (0, globals_1.test)("Should return empty list when no children are found", () => {
        const children = (0, get_child_elements_by_tagname_1.getChildElementsByTagName)(doc.querySelector("Document"), "Child");
        (0, globals_1.expect)(children.length).toBe(0);
    });
    (0, globals_1.test)("Should return empty list when no tag is supplied", () => {
        const children = (0, get_child_elements_by_tagname_1.getChildElementsByTagName)(doc.querySelector("Document"), null);
        (0, globals_1.expect)(children.length).toBe(0);
    });
    (0, globals_1.test)("Should reutrn empty list when no element is supplied", () => {
        const children = (0, get_child_elements_by_tagname_1.getChildElementsByTagName)(doc.querySelector("GrandChild"), "Child");
        (0, globals_1.expect)(children.length).toBe(0);
    });
});
