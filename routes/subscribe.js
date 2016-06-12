/*
 * POST subscribe an email to a list.
 */
exports.subscribe = function(req, res){
  mc.lists.subscribe({id: process.env.LIST_ID, email:{email:req.body.email}}, function(data) {
      //req.session.success_flash = 'User subscribed successfully! Look for the confirmation email.';
      console.log('successful subscription');
      res.redirect('/');
    },
    function(error) {
      if (error.error) {
        //req.session.error_flash = error.code + ": " + error.error;
        console.log(error.code + ": " + error.error);
      } else {
        //req.session.error_flash = 'There was an error subscribing that user';
        console.log("an error occured");
      }
      res.redirect('/');
    });
};
