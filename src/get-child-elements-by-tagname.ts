/**
 * @since 0.0.1
 *
 * Retrieves all child elements of a given element that match the specified tag name.
 *
 * @param element - The parent element to search within. If `null` or `undefined`, the function returns an empty array.
 * @param tag - The tag name to match against child elements. If `null` or `undefined`, the function returns an empty array.
 * @returns An array of child elements that have the specified tag name. If no matching elements are found, or if the input parameters are `null` or `undefined`, the function returns an empty array.
 *
 * @example
 * ```typescript
 * const parentElement = document.createElement('div');
 * const child1 = document.createElement('span');
 * const child2 = document.createElement('span');
 * const child3 = document.createElement('div');
 * parentElement.appendChild(child1);
 * parentElement.appendChild(child2);
 * parentElement.appendChild(child3);
 *
 * const spans = getChildElementsByTagName(parentElement, 'SPAN');
 * console.log(spans); // [child1, child2]
 * ```
 */
export const getChildElementsByTagName = (
  element: Element | null | undefined,
  tag: string | null | undefined
): Element[] => {
  if (!element || !tag) return [];
  return Array.from(element.children).filter(
    (element) => element.tagName === tag
  );
};
