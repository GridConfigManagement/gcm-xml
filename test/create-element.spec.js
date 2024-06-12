"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const create_element_1 = require("../src/create-element");
(0, globals_1.describe)("createElement", () => {
    const doc = new DOMParser().parseFromString("<Document />", "application/xml");
    (0, globals_1.test)("Should create element", () => {
        const res = (0, create_element_1.createElement)(doc, "Child");
        (0, globals_1.expect)(res.tagName.toLowerCase()).toBe("child");
    });
    (0, globals_1.test)("Should add given attributes", () => {
        const res = (0, create_element_1.createElement)(doc, "Child", {
            firstName: "John",
            lastName: "Doe",
        });
        (0, globals_1.expect)(res.getAttribute("firstName")).toEqual("John");
        (0, globals_1.expect)(res.getAttribute("lastName")).toEqual("Doe");
    });
    (0, globals_1.test)("Should not add given attribute when value is missing", () => {
        const res = (0, create_element_1.createElement)(doc, "Child", {
            name: null,
        });
        (0, globals_1.expect)(res.hasAttribute("name")).toBeFalsy();
    });
});
