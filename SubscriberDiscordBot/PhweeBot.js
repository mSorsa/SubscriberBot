let Token =
    "MTAyMDE0NjE0MDc3MzEwNTcyNQ.GLJ2aI.b0WNfQTEBgp1mtx5Jkm2xw16TgAEsJSBXKZmRY";
let GuildID = "756364115437551637";
console.log("Loaded...");
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });
client.on("guildMemberUpdate", () => {
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
            let NewRole = Individual.guild.roles.cache.find((NewRole) => NewRole.name.toLowerCase().includes("phweettens"));
            if (hasKittenRole && hasPhweakRole && !hasNewRole) {
                Individual.roles.add(NewRole);
            } else if (!hasKittenRole || !hasPhweakRole) {
                Individual.roles.remove(NewRole)
            }
        });
    });
});
client.login(Token);


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
