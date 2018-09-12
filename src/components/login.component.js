import React from "react";

const Login = ({ onSubmit }) => {
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault()
          console.log({ target: event.target });
          const { username, password } = event.target.elements;
          onSubmit({
            username: username.value,
            password: password.value,
          })
        }}
      >
        <label htmlFor="username">Username</label>
        <input id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
