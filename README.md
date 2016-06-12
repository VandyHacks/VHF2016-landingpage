VHF2016 landing page

Development instructions:
1. Create a heroku account if you have not already. Send Ethan the email you used to register and he will add you as a collaborator.
2. Run heroku git:clone -a fast-falls-60036 in your terminal. This clones the repository on heroku (You may need to install Heroku Toolbelt first)
3. To run the app locally, run "node index.js". To open the version running on heroku, run "heroku open".

If you just clone this git repository, you will not be able to run any of the heroku toolbelt commands or push to heroku.
When you are developing, make changes and test them by running the app locally (node index.js). Once your changes have passed your tests, push them to heroku with "git push heroku master". Heroku is the verison that is currently in production, so be careful when pushing to it. Also push your changes to the VHF2016-landing page git repo so we can keep both repositories in sync. I know this is annoying, but it's too much work to set this up automatically for just the landing page.
