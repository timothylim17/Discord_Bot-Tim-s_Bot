module.exports = {
  name: "not-a-command",
  description: "When someone puts an unexisting command, this will run",
  execute(message, args, Discord) {
    const msgEmbed = new Discord.MessageEmbed()
      .setColor("#E53511")
      .setTitle(`${message} is not a command`)
      .setDescription("Please run **!tim-help** get a list of the commands.");

    message.channel.send(msgEmbed);
  },
};
