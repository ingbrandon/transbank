/*More information abaout this , you can get in:
 https://github.com/react-component/field-form/blob/master/src/utils/messages.ts*/

/* eslint-disable no-template-curly-in-string */
export default function MessagesValidation() {
  return {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      min: '${label} cannot be less than ${min}',
    },
  };
}
/* eslint-enable no-template-curly-in-string */
