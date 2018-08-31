# ReactJS project focusing on testing.

## Tests to explore include:

### Unit Tests
Individual functions by supplying input and expecting an output.
```javascript
<!-- For example: Test a function that converts the string input to be output as lowercase -->
const convertStringToLowerCase = string => (
  string.toLowerCase()
);

test('String should be converted to lowercase letters', () => {
  expect(convertStringToLowerCase("TEST STRING")).toBe("test string");
});
```


### Integration Tests
Component behaviour testing, including side effects.


### UI Tests
Functional scenarios by controlling the browser/website to ensure expected behaviour.


## Test suite

[https://jestjs.io/](Jest)


[https://airbnb.io/projects/enzyme/](Enzyme - JavaScript Testing utilities for React)

*Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.* 


## Test structure style preferences: