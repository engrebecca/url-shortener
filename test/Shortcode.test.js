const generateShortcode = require("./Shortcode");

test("Returns a string", () => {
    expect(typeof generateShortcode()).toBe("string")
});
test("Returns a string with a length of 6", () => {
    expect(generateShortcode()).toHaveLength(6)
});
test("Returns a string that contains uppercase letters, lowercase letters, and/or numbers", () => {
    expect(generateShortcode()).toMatch(/[a-zA-Z0-9]/)
});