"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const clone_element_1 = require("../src/clone-element");
(0, globals_1.describe)("cloneElement", () => {
    const doc = new DOMParser().parseFromString("<Document />", "application/xml");
    let el;
    beforeEach(() => {
        el = doc.createElement("p");
    });
    (0, globals_1.test)("Should clone given element", () => {
        const res = (0, clone_element_1.cloneElement)(el);
        (0, globals_1.expect)(res.tagName.toLowerCase()).toBe("p");
        (0, globals_1.expect)(res.outerHTML).toEqual(el.outerHTML);
    });
    (0, globals_1.test)("Should copy existing attributes", () => {
        el.setAttribute("data-name", "John Doe");
        const res = (0, clone_element_1.cloneElement)(el);
        (0, globals_1.expect)(res.getAttributeNames()).toEqual(el.getAttributeNames());
        (0, globals_1.expect)(res.getAttribute("data-name")).toEqual(el.getAttribute("data-name"));
    });
    (0, globals_1.test)("Should add newly given attributes", () => {
        const res = (0, clone_element_1.cloneElement)(el, {
            "data-name": "John Doe",
        });
        (0, globals_1.expect)(res.getAttribute("data-name")).toEqual("John Doe");
    });
    (0, globals_1.test)("Should override attribute with given attribute", () => {
        el.setAttribute("data-name", "John Doe");
        const res = (0, clone_element_1.cloneElement)(el, {
            "data-name": "Jane Doe",
        });
        (0, globals_1.expect)(res.getAttribute("data-name")).toEqual("Jane Doe");
    });
    (0, globals_1.test)("Should remove attribute if value isn't set", () => {
        el.setAttribute("data-name", "John Doe");
        const res = (0, clone_element_1.cloneElement)(el, {
            "data-name": null,
        });
        (0, globals_1.expect)(res.hasAttribute("data-name")).toBeFalsy();
    });
});
