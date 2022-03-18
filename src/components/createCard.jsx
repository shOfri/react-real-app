import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import Form from "./common/form";
import withRouter from "./common/withRouter";
import cardsService from "../services/cardsService";
import { toast } from "react-toastify";

class CreateCard extends Form {
  state = {
    form: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhoneNumber: "",
      bizImage: "",
    },
  };

  schema = {
    bizName: Joi.string().min(2).max(255).required().label("Business Name"),
    bizDescription: Joi.string()
      .min(2)
      .max(1024)
      .required()
      .label("Business Description"),
    bizAddress: Joi.string().min(2).max(400).required().label("Address"),
    bizPhoneNumber: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/)
      .label("Phone Number"),
    bizImage: Joi.string().uri().max(1024).label("Image").allow(""),
  };

  async doSubmit() {
    const {
      form: { bizImage, ...body },
    } = this.state;

    if (bizImage) {
      body.bizImage = bizImage;
    }

    try {
      await cardsService.createCard(body);
      toast("A new card is opened!");
      this.props.navigate("/my-cards");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { bizImage: response.data } });
      }
    }
  }

  render() {
    return (
      <>
        <div className="col-5 mx-auto mt-5 text-center">
          <PageHeader title={"Create A New Card"} />
        </div>

        <form
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
          className="col-5 mx-auto mt-4"
        >
          {this.renderInput({
            name: "bizName",
            lable: "Business Name",
          })}
          {this.renderInput({
            name: "bizDescription",
            lable: "Business Discription",
          })}
          {this.renderInput({
            name: "bizAddress",
            lable: "Address",
          })}
          {this.renderInput({
            name: "bizPhoneNumber",
            lable: "Phone Number",
          })}
          {this.renderInput({
            name: "bizImage",
            lable: "Image",
          })}

          <div className="d-flex justify-content-center mt-3">
            {this.renderButton("Create Card")}
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(CreateCard);
