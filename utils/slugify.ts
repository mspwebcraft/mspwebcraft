/**
 * Converts a string into a URL-friendly slug.
 *
 * This function converts the input string to lowercase, trims leading and trailing
 * whitespace, replaces spaces with hyphens, removes non-word characters, and replaces
 * multiple hyphens with a single hyphen.
 *
 * @param {string} text - The input string to be slugified.
 * @returns {string} - The slugified version of the input string.
 *
 * @example
 * slugify('Hello World! This is a test.');
 * // Returns 'hello-world-this-is-a-test'
 */

const slugify = (text: string): string => {
  return text
    .toString() // Convert to string (in case input is not)
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading/trailing whitespace
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-"); // Replace multiple hyphens with a single hyphen
};

export default slugify;
