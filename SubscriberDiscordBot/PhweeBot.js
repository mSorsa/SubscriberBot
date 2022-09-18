const AWS = require("aws-sdk");
let S3 = new AWS.S3({
  MyToken: process.env.Token,
});
console.log(S3);
let GuildID = "756364115437551637";
console.log("Loaded...");
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.on("guildMemberUpdate", () => {
  try {
    console.log(`Roles updated...`);
    const Guild = client.guilds.cache.get(GuildID);
    Guild.members.fetch().then((ListOfMembers) => {
      ListOfMembers.forEach((Individual) => {
        let hasKittenRole = false;
        let hasPhweakRole = false;
        let hasNewRole = false;
        Individual.roles.cache.forEach((UserRole) => {
          if (UserRole.name.toLowerCase().includes("kittens")) {
            hasKittenRole = true;
          } else if (UserRole.name.toLowerCase().includes("phweaks")) {
            hasPhweakRole = true;
          } else if (UserRole.name.toLowerCase().includes("phweettens")) {
            hasNewRole = true;
          }
        });
        //The following lines run ASYNC and takes a while for the results to show on DISCORD...
        let NewRole = Individual.guild.roles.cache.find((NewRole) =>
          NewRole.name.toLowerCase().includes("phweettens")
        );
        if (hasKittenRole && hasPhweakRole && !hasNewRole) {
          Individual.roles.add(NewRole);
        } else if (!hasKittenRole || !hasPhweakRole) {
          Individual.roles.remove(NewRole);
        }
      });
    });
  } catch (ErrorMsg) {
    SendMessage(ErrorMsg);
  }
});
async function SendMessage(LocalError) {
  const MyUserID = "556859005016866853";
  const BTC = await client.users.fetch(MyUserID).then();
  BTC.send(`The bot has experienced and error: ${LocalError} \n 
    Please go to https://www.heroku.com to check error logs.
  `);
}
client.login(S3.MyToken);

//My Guild
// let GuildID = "988489593466810398";
// console.log("Loaded...");
// const { Client, GatewayIntentBits } = require("discord.js");
// const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });
// client.on("guildMemberUpdate", () => {
//     const GuildTest = client.guilds.cache.get(GuildID);
//     console.log(`GuildTest: ${GuildTest}`);
//     GuildTest.members.fetch().then((ListOfMembers) => {
//         ListOfMembers.forEach((Individual) => {
//             let hasKittenRole = false;
//             let hasPhweakRole = false;
//             let hasNewRole = false;
//             Individual.roles.cache.forEach((UserRole) => {
//                 if (UserRole.name.toLowerCase().includes("test1")) {
//                     hasKittenRole = true;
//                 } else if (UserRole.name.toLowerCase().includes("test2")) {
//                     hasPhweakRole = true;
//                 } else if (UserRole.name.toLowerCase().includes("cub")) {
//                     hasNewRole = true;
//                 }
//             });
//             let NewRole = Individual.guild.roles.cache.find((NewRole) => NewRole.name.toLowerCase().includes("cub"));
//             if (hasKittenRole && hasPhweakRole && !hasNewRole) {
//                 Individual.roles.add(NewRole);
//             } else if (!hasKittenRole || !hasPhweakRole) {
//                 Individual.roles.remove(NewRole)
//             }
//         });
//     });
// });
// client.login(Token);
