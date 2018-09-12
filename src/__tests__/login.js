import React from "react";
import { render, cleanup } from "react-testing-library";
import Login from "../login";

afterEach(cleanup);

test("calls onSubmit with username and password", () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(
    <Login onSubmit={handleSubmit} />
  );

  getByLabelText(/username/i).value = "Dallas";
  getByLabelText(/password/i).value = "Gale";
  getByText(/submit/i).click();

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    username: "Dallas",
    password: "Gale"
  });
});
