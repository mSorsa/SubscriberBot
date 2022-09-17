let Token = "MTAyMDE0NjE0MDc3MzEwNTcyNQ.GEfaFG.6fXATz3uyP_AlTI716EM6llLcppd75Vfxf4d1I";
let GuildID = "988489593466810398";
console.log("Loaded...");
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.on('roleUpdate', () => {
    let hasKittenRole = false;
    let hasPhweakRole = false;
    let hasNewRole = false;
    const Guild = client.guilds.cache.get(GuildID);
    Guild.members.cache.forEach(m => {
        m.roles.cache.some(r => {
            if (r.name.toLowerCase().includes("test1")) { hasKittenRole = true; }
            else if (r.name.toLowerCase().includes("test2")) { hasPhweakRole = true; }
            else if (r.name.toLowerCase().includes("Cub")) { hasNewRole = true; }
        });
        let NewRole = m.guild.roles.cache.find(r2 => r2.name === "Cub");
        if (hasKittenRole && hasPhweakRole && !hasNewRole) { m.roles.add(NewRole); }
        else if (!hasKittenRole || !hasPhweakRole) { m.roles.remove(NewRole); }
    });
});


// Phwee code - Working with Phwee access
// let GuildID = "756364115437551637"; //Phwee's Guild
// console.log("Loaded...");
// const { Client, GatewayIntentBits } = require('discord.js');
// const client = new Client({ intents: [GatewayIntentBits.Guilds] });
// client.once('ready', () => {
//     let hasKittenRole = false;
//     let hasPhweakRole = false;
//     let hasNewRole = false;
//     const Guild = client.guilds.cache.get(GuildID);
//     Guild.members.cache.forEach(m => {
//         m.roles.cache.some(r => {
//             if (r.name.toLowerCase().includes("kittens")) { hasKittenRole = true; }
//             else if (r.name.toLowerCase().includes("phweaks")) { hasPhweakRole = true; }
//             else if (r.name.toLowerCase().includes("newrole")) { hasNewRole = true; }
//         });
//         let NewRole = m.guild.roles.cache.find(r2 => r2.name === "NewRole");
//         if (hasKittenRole && hasPhweakRole && !hasNewRole) { m.roles.add(NewRole); }
//         else if (!hasKittenRole || !hasPhweakRole) { m.roles.remove(NewRole); }
//     });
// });
client.login(Token);