Hi, hello.

PhweeBot.js is a discord bot that was created by BearTheCoder for use in the Phwee and Aethy Discord server.
The bot works off of other existing bots already in the Discord server.
There is currently a bot or two that scans each member's Twitch channel to see if they are subscribed to the Guild Owner's Twitch an assigns them a role based on who they
are subscribed to.
If they are subscribed to Aethy they are given the role "kitten" if they are subscribed to Phwee they are given the role "phweak".
The bot iterates over each member every time a role is changed and gives members a new role if they are both a "kitten" and a "phweak".
The bot removes this new role if they are already assigned the new role and not subscribed to both on Twitch.
This bot has no Twitch integration and strictly works based off of the other bots running in the channel.
Therefore, if one bot breaks, so does this one.

This bot is hosted on Heroku, and all error management and codes go through Heroku's logs.
The code is hosted on github.

Ok, bye.
