import React, { useContext, useState, SyntheticEvent } from "react";
import { AuthStoreContext } from "../../stores/authStore";
import { observer } from "mobx-react-lite";

const LoginForm = () => {
  const { login } = useContext(AuthStoreContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(user);
      }}
    >
      <div className="form-row md-form my-0 align-items-center">
        <div className="col">
          <input
            name="email"
            className="form-control"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="col mr-2">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Login
        </button>
      </div>
    </form>
  );
};

export default observer(LoginForm);
