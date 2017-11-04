import React, { Component } from 'react';
import validators from './validators';

export class Contact extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      }
    };

    // Set of validators for contact form
    this.validators = validators;

    // This resets our form when navigating between views
    this.resetValidators();

    // Correctly Bind class methods to reacts class instance
    this.handleInputChange = this.handleInputChange.bind(this);
    this.displayValidationErrors = this.displayValidationErrors.bind(this);
    this.updateValidators = this.updateValidators.bind(this);
    this.resetValidators = this.resetValidators.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
  }

  /**
   * This function is called whenever a form input is changed
   * Which in turn updates the state of this component and validators
   */
  handleInputChange(event, inputPropName) {
    const newState = Object.assign({}, this.state);
    newState.userInfo[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
  }

   /**
   * This function handles the logic when submiting the form.
   * @TODO make an API request to authenticate the user
   */
  handleSubmit(e) {
    console.log(this.state.userInfo);
    console.log('Yepee! form submitted');
    e.preventDefault();
  }

   /**
   * This function updates the state of the validator for the specified validator
   */
  updateValidators(fieldName, value) {
    this.validators[fieldName].errors = [];
    this.validators[fieldName].state = value;
    this.validators[fieldName].valid = true;
    this.validators[fieldName].rules.forEach((rule) => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      } else if (typeof rule.test === 'function') {
        if (!rule.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      }
    });
  }

  // This function resets all validators for this form to the default state
  resetValidators() {
    Object.keys(this.validators).forEach((fieldName) => {
      this.validators[fieldName].errors = [];
      this.validators[fieldName].state = '';
      this.validators[fieldName].valid = false;
    });
  }

  // This function displays the validation errors for a given input field
  displayValidationErrors(fieldName) {
    const validator = this.validators[fieldName];
    const result = '';
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return <span className="error" key={index}>* {info}</span>;
      });

      return (
        <div className=" error-message col s12 row">
          {errors}
        </div>
      );
    }
    return result;
  }

  // This method checks to see if the validity of all validators are true
  isFormValid() {
    let status = true;
    Object.keys(this.validators).forEach((field) => {
      if (!this.validators[field].valid) {
        status = false;
      }
    });
    return status;
  }

  // Renders the template
  render() {
    return (
      <div className="home-main">
      <p className="h1">Contact Us</p>
      <p className="h4">Tanveer Hospital values our patients and will respond to all inquiries and messages as promptly as possible. Please contact us using the information provided, or submit a message using the form below.</p>
      <div className="form-container">
        <form method="post">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text"
            className="form-control"
            name="firstName"
            id="usrFirst"
            placeholder="First name"
            value={this.state.userInfo.firstname}
            onChange={event => this.handleInputChange(event, 'firstname')}
           />
           { this.displayValidationErrors('firstname') }
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text"
            className="form-control"
            name="lastName"
            id="usrLast"
            placeholder="Last name"
            value={this.state.userInfo.lastname}
            onChange={event => this.handleInputChange(event, 'lastname')}
            />
             { this.displayValidationErrors('lastname') }
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email"
            className="form-control"
            name="email"
            id="eml"
            placeholder="Email"
            value={this.state.userInfo.email}
            onChange={event => this.handleInputChange(event, 'email')}
            />
            { this.displayValidationErrors('email') }
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel"
            className="form-control"
            name="phone"
            id="tel"
            placeholder="Phone"
            value={this.state.userInfo.phone}
            onChange={event => this.handleInputChange(event, 'phone')}
            />
             { this.displayValidationErrors('phone') }
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
            className="form-control"
            rows="5"
            name="message"
            id="comment"
            placeholder="Your message or comments"
            value={this.state.userInfo.message}
            onChange={event => this.handleInputChange(event, 'message')}>
            </textarea>
             { this.displayValidationErrors('message') }
          </div>
          <div className="form-group">
            <div className="col-lg-16">
              <button type="submit" className={`btn waves-effect waves-light col s12 ${this.isFormValid() ? '' : 'disabled'}`}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}
