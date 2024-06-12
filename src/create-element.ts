/**
 * @since 0.0.1
 *
 * Creates a new element with the specified tag name and attributes in the given document.
 *
 * @param doc - The document in which to create the element.
 * @param tag - The tag name for the new element.
 * @param attributes - An optional object containing key-value pairs representing the attributes to set on the new element. Attributes with a value of `null` will be ignored.
 * @returns The newly created element.
 *
 * @example
 * ```typescript
 * const doc = document.implementation.createDocument(null, 'root');
 * const attributes = { id: 'test-id', class: 'test-class', title: null };
 * const newElement = createElement(doc, 'div', attributes);
 * console.log(newElement.outerHTML); // <div id="test-id" class="test-class"></div>
 * ```
 */
export const createElement = (
  doc: Document,
  tag: string,
  attributes?: Record<string, string | null>
): Element => {
  const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
  if (attributes) {
    Object.entries(attributes)
      .filter(([_, value]) => value !== null)
      .forEach(([name, value]) => element.setAttribute(name, value!));
  }
  return element;
};
