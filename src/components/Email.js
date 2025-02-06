const { Button, Html } = require("@react-email/components");
const React = require("react");

const Email = ({ url }) => {
  return (
    React.createElement(Html, { lang: "en" },
      React.createElement("p", null, "Thank you for reaching out!"),
      React.createElement(Button, { href: url }, "Click Here")
    )
  );
};

module.exports = Email;
