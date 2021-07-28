module.exports = {
  name: "not-a-command",
  description: "When someone puts an unexisting command, this will run",
  execute(message, args, Discord) {
    const msgEmbed = new Discord.MessageEmbed()
      .setColor("#E53511")
      .setTitle(`${message} is not a command`);

    message.delete({ timeout: "1000" });
    message.channel.send(msgEmbed);
  },
};
