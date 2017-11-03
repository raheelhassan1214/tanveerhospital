import React from "react";
import {FormErrors} from "./FormErrors";
export class Contact extends React.Component {
constructor(props){
  super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      formErrors: {firstName: '', lastName: '', email: '', phone: '',  message: ''},
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      phoneValid: false,
      messageValid: false,
      formValid:false
    }
  }
  change(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'firstName':
        firstNameValid = value.length >= 6;
        fieldValidationErrors.firstName = firstNameValid ? '': ' is too short';
        break;

      case 'lastName':
          lastNameValid = value.length >= 6;
          fieldValidationErrors.lastName = lastNameValid ? '': ' is too short';
          break;

      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'phone':
        phoneValid = value.length >= 9;
        fieldValidationErrors.phone = phoneValid ? '': ' is too short';
        break;
      case 'message':
          messageValid = value.length >= 20;
          fieldValidationErrors.message = messageValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    firstNameValid:firstNameValid,
                    lastNameValid:lastNameValid,
                    emailValid: emailValid,
                    phoneValid:phoneValid,
                    messageValid:messageValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.emailValid && this.state.phoneValid && this.state.messageValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  render(){
    return (
      <div className="home-main">
        <p className="h1">Contact Us</p>
        <p className="h4">Tanveer Hospital values our patients and will respond to all inquiries and messages as promptly as possible. Please contact us using the information provided, or submit a message using the form below.</p>
        <div className="form-container">
          <form method="post">
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
              <label htmlFor="firstName">First Name:</label>
              <input type="text"onChange={e => this.change(e)} value={this.state.firstName} className="form-control" name="firstName" id="usrFirst"/>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" onChange={e => this.change(e)} value={this.state.lastName} className="form-control" name="lastName" id="usrLast"/>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
              <label htmlFor="email">Email:</label>
              <input type="email" onChange={e => this.change(e)} value={this.state.email} className="form-control" name="email" id="eml"/>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.phone)}`}>
              <label htmlFor="phone">Phone:</label>
              <input type="tel" onChange={e => this.change(e)} value={this.state.phone} className="form-control" name="phone" id="tel"/>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.message)}`}>
              <label htmlFor="message">Message:</label>
              <textarea onChange={e => this.change(e)} value={this.state.message} className="form-control" rows="5" name="message" id="comment"></textarea>
            </div>
            <div className="form-group">
              <div className="col-lg-16">
                <button type="submit" disabled={!this.state.formValid} className="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
