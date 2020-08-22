import React from "react";
import "./RegisterForm.css";
import { useForm } from "react-hook-form";

interface IProps {
  handleRegisterMode: () => void;
}

type Inputs = {
  displayName: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC<IProps> = ({ handleRegisterMode }) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="register-form">
      <section className="form-elegant col-4">
        <div className="card">
          <div className="card-body mx-4">
            <div className="text-center">
              <h3 className="purple-text mb-5">
                <strong>Sign in</strong>
              </h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="md-form">
                <input
                  name="displayName"
                  ref={register({ required: true })}
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
                {errors.displayName && (
                  <span className="text-danger">{errors.displayName.type}</span>
                )}
              </div>

              <div className="md-form">
                <input
                  name="email"
                  type="text"
                  ref={register({ required: true })}
                  className="form-control"
                  placeholder="Your email"
                />
              </div>

              <div className="md-form pb-3">
                <input
                  name="password"
                  type="password"
                  ref={register({ required: true })}
                  className="form-control"
                  placeholder="Your password"
                />

                <p className="font-small purple-text d-flex justify-content-end">
                  Forgot Password?
                </p>
              </div>

              <div className="text-center btn-group w-100 mb-3">
                <button
                  type="submit"
                  className="btn purple-gradient btn-rounded z-depth-1a"
                >
                  Sign in
                </button>

                <button
                  type="button"
                  className="btn btn-rounded z-depth-1a"
                  onClick={handleRegisterMode}
                >
                  Cancel
                </button>
              </div>
            </form>

            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
              or Sign in with:
            </p>

            <div className="row my-3 d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-white btn-rounded mr-md-3 z-depth-1a"
              >
                <i className="fa fa-facebook-f purple-text text-center"></i>
              </button>
              <button
                type="button"
                className="btn btn-white btn-rounded mr-md-3 z-depth-1a"
              >
                <i className="fa fa-twitter purple-text"></i>
              </button>
              <button
                type="button"
                className="btn btn-white btn-rounded z-depth-1a"
              >
                <i className="fa fa-google-plus purple-text"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;
