import Joi from "joi";
import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import usersService from "../services/usersService";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import withRouter from "./common/withRouter";

class SignIn extends Form {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(6).required(),
  };

  async doSubmit() {
    const { email, password } = this.state.form;

    try {
      await usersService.login(email, password);
      toast("Welcome to Real-App!");
      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {
    if (usersService.getUser()) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <div className="col-5 mx-auto mt-5 text-center">
          <PageHeader title={"Sign In to Real App"} />
        </div>

        <form
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
          className="col-5 mx-auto mt-4"
        >
          {this.renderInput({
            name: "email",
            lable: "Email",
            type: "email",
            required: true,
          })}
          {this.renderInput({
            name: "password",
            lable: "Password",
            type: "password",
            required: true,
          })}

          <div className="d-flex justify-content-center mt-3">
            {this.renderButton("Sign In")}
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(SignIn);
