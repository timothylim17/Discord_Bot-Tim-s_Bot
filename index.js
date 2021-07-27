require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const fs = require("fs");

const prefix = "!";

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
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

  const channel = process.env.DJS_REACTION_CHANNEL;

  switch (command) {
    case "major-roles":
      if (
        message.channel.id == channel &&
        message.member.hasPermission("ADMINISTRATOR")
      ) {
        client.commands
          .get("major-roles")
          .execute(message, args, Discord, client);
      } else {
        client.commands.get("access-Denied").execute(message, args, Discord);
      }
      break;
    case "cs-class-roles":
      if (
        message.channel.id == channel &&
        message.member.hasPermission("ADMINISTRATOR")
      ) {
        client.commands
          .get("cs-class-roles")
          .execute(message, args, Discord, client);
      } else {
        client.commands.get("access-Denied").execute(message, args, Discord);
      }
      break;
    case "engr-class-roles":
      if (
        message.channel.id == channel &&
        message.member.hasPermission("ADMINISTRATOR")
      ) {
        client.commands
          .get("engr-class-roles")
          .execute(message, args, Discord, client);
      } else {
        client.commands.get("access-Denied").execute(message, args, Discord);
      }
      break;
    case "misc-roles":
      if (
        message.channel.id == channel &&
        message.member.hasPermission("ADMINISTRATOR")
      ) {
        client.commands
          .get("misc-roles")
          .execute(message, args, Discord, client);
      } else {
        client.commands.get("access-Denied").execute(message, args, Discord);
      }
      break;
    default:
      client.commands.get("notacommand").execute(message, args, Discord);
  }
});

client.login(process.env.DJS_TOKEN);
