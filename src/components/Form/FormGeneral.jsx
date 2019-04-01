import React from "react";
import FormHeader from "./FormHeader";
import Form from "./Form";
import Contact from "../Contact/Contact";
import "./FormAlertStripe.scss";

class FormGeneral extends React.Component {
  render() {
    return (
      <>
        <FormHeader />
        <Form />
        <Contact />
      </>
    );
  }
}

export default FormGeneral;
