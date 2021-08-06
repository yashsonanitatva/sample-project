import i18next from "i18next";

import "@lib/i18n/config";

i18next.addResourceBundle("en-GB", "Login", {
  title: "Login",
  userName: "User name",
  password: "Password",
  login: "Login",
  errors: {
    userName: "Please enter user name",
    password: "Please enter password",
  },
});
