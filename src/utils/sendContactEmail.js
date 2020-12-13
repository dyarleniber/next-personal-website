import sgMail from "@sendgrid/mail";
import sanitizeHtml from "sanitize-html";
import contactMailConfig from "../config/contactMail";

const sendContactEmail = async ({ email, message }) => {
  const {
    sendgridApiKey,
    sendgridSender,
    mailRecipients,
    mailSubject,
  } = contactMailConfig;

  const sanitizedEmail = sanitizeHtml(email);
  const sanitizedMessage = sanitizeHtml(message);
  const html = `
    <b>${sanitizedEmail}</b><br>
    <p>${sanitizedMessage}</p>
  `;

  sgMail.setApiKey(sendgridApiKey);
  sgMail.send({
    from: sendgridSender,
    to: mailRecipients,
    subject: mailSubject,
    html,
  });
};

export default sendContactEmail;
