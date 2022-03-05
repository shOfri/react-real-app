import React, { Component } from "react";
import usersService from "../services/usersService";

class SignOut extends Component {
  state = {};

  componentDidMount() {
    usersService.logout();
    window.location = "/sign-in";
  }
  render() {
    return null;
  }
}

export default SignOut;
