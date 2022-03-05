import Joi from "joi";
import React from "react";
import { toast } from "react-toastify";
import usersService from "../services/usersService";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import withRouter from "./common/withRouter";
import { Navigate } from "react-router-dom";

class BusinessSignUp extends Form {
  state = {
    form: {
      email: "",
      password: "",
      name: "",
    },
  };

  schema = {
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().min(2).required(),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: true };

    try {
      await usersService.createUser(body);
      await usersService.login(form.email, form.password);
      toast("You are now a business registed");
      window.location = "/create-card";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({
          errors: { email: response.data },
        });
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
          <PageHeader title={"Sign Up for Real App as Business"} />
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
          {this.renderInput({
            name: "name",
            lable: "User Name",
            required: true,
          })}

          <div className="d-flex justify-content-center mt-3">
            {this.renderButton("Sign Up")}
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(BusinessSignUp);
