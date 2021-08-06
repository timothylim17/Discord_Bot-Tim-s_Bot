require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "GUILD_MEMBER", "CHANNEL", "REACTION", 'USER'],
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

  if (
    message.channel.id == channel &&
    message.member.hasPermission("ADMINISTRATOR")
  ) {
    switch (command) {
      case "major-roles":
        client.commands
          .get("major-roles")
          .execute(message, args, Discord, client);
        break;

      case "cs-class-roles":
        client.commands
          .get("cs-class-roles")
          .execute(message, args, Discord, client);
        break;

      case "engr-class-roles":
        client.commands
          .get("engr-class-roles")
          .execute(message, args, Discord, client);
        break;

      case "misc-roles":
        client.commands
          .get("misc-roles")
          .execute(message, args, Discord, client);
        break;

      case "nuke-this-channel":
        client.commands.get("nuke-this-channel").execute(message, args);
        break;

      case "tim-help":
        client.commands
          .get("tim-help")
          .execute(message, args, Discord, client, fs);
        break;

      default:
        client.commands.get("not-a-command").execute(message, args, Discord);
    }
  } else {
    client.commands.get("access-Denied").execute(message, args, Discord);
  }
});

client.login(process.env.DJS_TOKEN);
