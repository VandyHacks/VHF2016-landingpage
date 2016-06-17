
const mcapi = require('mailchimp-api');
const mc = new mcapi.Mailchimp(process.env.MAILCHIMP_API_KEY);

/*
 * POST subscribe an email to a list.
 */
exports.subscribe = (req, res) => {
  const io = req.app.get('socketio');

  mc.lists.subscribe({ id: process.env.LIST_ID, email: { email: req.body.email } }, data => {
    // req.session.success_flash = 'User subscribed successfully! Look for the confirmation email.';

    console.log('successful subscription');
    io.emit('error', 'Successfully Subscribed! Stay tuned for updates and get excited!');
    res.send('done');
  },
  (error) => {
    if (error.error) {
      // req.session.error_flash = error.code + ": " + error.error;
      console.log(`${error.code}: ${error.error}`);
      io.emit('error', 'Try Again with a valid email address!');
    } else {
      // req.session.error_flash = 'There was an error subscribing that user';
      io.emit('error', 'Try Again. An error occured!');
      console.log('an error occured');
    }
    res.redirect('/');
  });
};
