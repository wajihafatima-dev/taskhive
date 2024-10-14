export const authConstant = {
    login: {
      text: "Sign In to your Account",
      checkbox_text: "Remember me",
      reset_link: { text: "click here?", href: " /resetpassword " },
      button_text: "Sign In",
      link: { text: "Don't have an accound?", href: "/signup", reset: "/resetpassword" },
      fields: [
        { type: "email", label: "Email:", place_holder: "Enter your email" },
        {
          type: "password",
          label: "Password:",
          place_holder: "Enter your password",
        },
      ],
    },
    reset: {
      text: "Reset your password",
      button_text: "Send Current Email",
    },
    signup: {
      text: "Sign Up for an Account",
      button_text: "Sign Up",
      link: { text: "Already have a profile?", href: "/" },
      fields: [
        {
          name: "firstName",
          type: "text",
          label: "FirstName:",
          place_holder: "Enter your firstname",
        },
        {
          name: "lastName",
          type: "text",
          label: "LastName:",
          place_holder: "Enter your lastname",
        },
        {
          name: "email",
          type: "email",
          label: "Email:",
          place_holder: "Enter your email",
        },
        {
          name: "password",
          type: "password",
          label: "Password:",
          place_holder: "Enter your password",
        },
      ],
    },
}