const config = {
  sendgridApiKey: process.env.SENDGRID_API_KEY,
  sendgridSender: process.env.SENDGRID_SENDER,
  mailRecipients: process.env.CONTACT_MAIL_RECIPIENTS.split(","),
  mailSubject: "New contact",
};

export default config;
