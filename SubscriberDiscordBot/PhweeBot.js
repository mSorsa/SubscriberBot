/*
    To-Do:
        Have Phwee and Aethy name the bot.
        Have Phwee add bot to discord. (I can send link)
        Have Phwee add new role to her discord. (Aethy and Phwee subs)
        Change code to adopt new role.
        Test Code - Hopefully works right the first time. (Super-Ultra Rare, 9.5 VGA graded collectible)
*/
let Token =
  "MTAyMDE0NjE0MDc3MzEwNTcyNQ.GLiojV.A7u4twOvz0ssPiyvVlmIRjnDiYLBmfSYRjsTOA";
let GuildID = "756364115437551637"; //Phwee and Aethy's Guild ID
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once("guildMemberUpdate", () => {
  let hasKittenRole = false;
  let hasPhweakRole = false;
  let hasNewRole = false;
  const Guild = client.guilds.cache.get(GuildID);
  Guild.members.cache.forEach((m) => {
    m.roles.cache.some((r) => {
      if (r.name.toLowerCase().includes("kittens")) hasKittenRole = true;
      else if (r.name.toLowerCase().includes("phweaks")) hasPhweakRole = true;
      else if (r.name.toLowerCase().includes("CHANGE_ME")) hasNewRole = true;
    });
    let NewRole = m.guild.roles.cache.find((r2) => r2.name === "CHANGE_ME");
    if (hasKittenRole && hasPhweakRole && !hasNewRole) m.roles.add(NewRole);
    else if (!hasKittenRole || !hasPhweakRole) m.roles.remove(NewRole);
  });
});
client.login(Token);

// On Ready - Works - My Guild
// let GuildID = "988489593466810398";
// console.log("Loaded...");
// const { Client, GatewayIntentBits } = require("discord.js");
// const client = new Client({ intents: [GatewayIntentBits.Guilds] });
// client.on("guildMemberUpdate", () => {
//   console.log("Role Change...");
//   let hasKittenRole = false;
//   let hasPhweakRole = false;
//   let hasNewRole = false;
//   const Guild = client.guilds.cache.get(GuildID);
//   Guild.members.cache.forEach((m) => {
//     m.roles.cache.some((r) => {
//       if (r.name.toLowerCase().includes("test1")) {
//         hasKittenRole = true;
//       } else if (r.name.toLowerCase().includes("test2")) {
//         hasPhweakRole = true;
//       } else if (r.name.toLowerCase().includes("Cub")) {
//         hasNewRole = true;
//       }
//     });
//     let NewRole = m.guild.roles.cache.find((r2) => r2.name === "Cub");
//     if (hasKittenRole && hasPhweakRole && !hasNewRole) {
//       m.roles.add(NewRole);
//     } else if (!hasKittenRole || !hasPhweakRole) {
//       m.roles.remove(NewRole);
//     }
//   });
// });

// Token Copy: MTAyMDE0NjE0MDc3MzEwNTcyNQ.GLiojV.A7u4twOvz0ssPiyvVlmIRjnDiYLBmfSYRjsTOA
