const { Client, IntentsBitField } = require("discord.js");
require("dotenv/config");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on("ready", () =>{
    console.log("The bot is ready");
})

client.login(process.env.TOKEN);