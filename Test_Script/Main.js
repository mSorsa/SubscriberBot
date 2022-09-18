const { Client } = require("discord.js");
let Token =
  "MTAyMTA5NDM4OTU1NDA5ODE5Nw.GFgmXR.FutOkI8EF0pqy-tW1Bpv1U64pkPcmEIFY9_1hc"; //TestBot
const MyUserID = "556859005016866853";
const NewClient = new Client({ intents: [] });
NewClient.on("ready", async () => {
  const BTC = await NewClient.users.fetch(MyUserID).then();
  BTC.send("This is a test...");
});
NewClient.login(Token);
