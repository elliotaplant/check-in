const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

exports.sendMessage = (to, body) => {
  const twilMessage = { to, from: process.env.TWILIO_NUMBER, body };
  return twilio.messages
    .create(twilMessage)
    .catch((err) => {
      if (err) {
        console.error('Error sending twilio message:', err);
      }
      return err;
    });
};
