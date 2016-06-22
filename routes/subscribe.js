
const mcapi = require('mailchimp-api');
const mc = new mcapi.Mailchimp(process.env.MAILCHIMP_API_KEY);

/*
 * POST subscribe an email to a list.
 */
function subscribe(req, res) {
  const io = req.app.get('socketio');

  mc.lists.subscribe({ id: process.env.LIST_ID, email: { email: req.body.email } }, data => {
    io.emit('error', 'Successfully Subscribed! Stay tuned for updates and get excited!');
    console.log('successful subscription');
    res.send('done');
  },
  (error) => {
    if (error.error) {
      io.emit('error', 'Try Again with a valid email address!');
      console.error(`${error.code}: ${error.error}`);
    } else {
      io.emit('error', 'Try Again. An error occured!');
      console.error('an error occured');
    }
    res.redirect('/');
  });
}

module.exports = subscribe;
