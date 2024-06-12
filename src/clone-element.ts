/**
 * @since 0.0.1
 *
 * Clones the given element and optionally sets or removes specified attributes.
 *
 * @param element - The element to be cloned.
 * @param attributes - An optional object containing key-value pairs representing the attributes to set or remove on the cloned element. Attributes with a value of `null` will be removed.
 * @returns The newly cloned element with the specified attribute modifications.
 *
 * @example
 * ```typescript
 * const originalElement = document.createElement('div');
 * originalElement.setAttribute('id', 'original');
 * originalElement.setAttribute('class', 'my-class');
 *
 * const attributes = { id: 'cloned', class: null, title: 'New Title' };
 * const clonedElement = cloneElement(originalElement, attributes);
 *
 * console.log(clonedElement.outerHTML); // <div id="cloned" title="New Title"></div>
 * ```
 */
export const cloneElement = (
  element: Element,
  attributes?: Record<string, string | null>
): Element => {
  const newElement = <Element>element.cloneNode(false);
  if (attributes) {
    Object.entries(attributes).forEach(([name, value]) => {
      if (value === null) newElement.removeAttribute(name);
      else newElement.setAttribute(name, value);
    });
  }
  return newElement;
};
