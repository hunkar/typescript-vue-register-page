import { UserType } from "@/types/User";

export default {
  titles: {
    account: "My Account",
    register: "Register",
  },
  placeholders: {
    email: "Email",
    firstName: "First Name",
    lastName: "Last Name",
    password: "Password",
  },
  labels: {
    registerButton: "Register",
    errorOccured: "Error occured",
    successfullRegister: ({ values }: { values: { user: UserType } }) => {
      return `Thank you ${values.user.firstName} ${values.user.lastName}, you have successfully been registered.`;
    },
  },
  errors: {
    emailFormat: "Email should be in correct format!",
    firstNameFormat: "First name should be alpha-numeric characters!",
    lastNameFormat: "Last name should be alpha-numeric characters!",
    passwordFormat: "Password should be minimum 6 character!",
    notEmpty: "This field is required!",
  },
};
