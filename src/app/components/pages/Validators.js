const validator = {
  firstname: {
    rules: [
      {
        test: /([a-zA-Z]{3,30}\s*)+/,
        message: 'First name must contain only characters',
      },
      {
        test: (value) => {
          return value.length > 2;
        },
        message: 'First name must be longer than two characters',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
  lastname: {
    rules: [
      {
        test: /([a-zA-Z]{3,30}\s*)+/,
        message: 'Last name must contain only characters',
      },
      {
        test: (value) => {
          return value.length > 2;
        },
        message: 'Last name must be longer than two characters',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
  email: {
    rules: [
      {
        test:/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        message: 'Invalid email addrress',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
  phone: {
    rules: [
      {
        test: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
        message: 'Invalid phone number',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
  message: {
    rules: [
      {
        test: (value) => {
          return value.length >= 20;
        },
        message: 'Comments must not be shorter than 20 characters',
      },
    ],
    errors: [],
    valid: false,
    state: ''
  },
};

export default validator;
