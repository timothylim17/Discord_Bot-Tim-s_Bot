require("dotenv").config();
const Discord = require(discord.js);
const fs = require("fs");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const prefix = "!";

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirFiles("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Tim's Bot is online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    default:
      client.commands.get("notacommand").execute(message, args, Discord);
  }
});

client.login(process.env.BOTTOKEN);
