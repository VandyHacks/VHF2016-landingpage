
/*
 * POST subscribe an email to a list.
 */
exports.subscribe = function(req, res){
  mc.lists.subscribe({id: process.env.LIST_ID, email:{email:req.body.email}}, function(data) {
      //req.session.success_flash = 'User subscribed successfully! Look for the confirmation email.';
      console.log('successful subscription');
      var io = req.app.get('socketio');
      io.emit('error', "Successful Subscribed! Stay tuned for updates and get excited!");
      res.send('done');
    },
    function(error) {
      if (error.error) {
        //req.session.error_flash = error.code + ": " + error.error;
        var io = req.app.get('socketio');
        console.log(error.code + ": " + error.error);
        io.emit('error', "Try Again with a valid email address!");
      } else {
        //req.session.error_flash = 'There was an error subscribing that user';
        var io = req.app.get('socketio');
        io.emit('error', "Try Again. An error occured!");
        console.log("an error occured");
      }
      res.send('done');
    });
};