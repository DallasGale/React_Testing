// - - - - - - - - - - - - 
// UNIT TESTING: Functions
// - - - - - - - - - - - -


// 1. Convert a string to lowercase letters

const convertStringToLowerCase = string => (
  string.toLowerCase()
);

test('String should be converted to lowercase letters', () => {
  expect(convertStringToLowerCase("TEST STRING")).toBe("test string");
});



// 2. Remove white space between words

const removeWhiteSpace = string => (
  string.replace(/ /g, "")
);

test('String should hace no spaces between words', () => {
  expect(removeWhiteSpace("This is a string")).toBe("Thisisastring");
});


