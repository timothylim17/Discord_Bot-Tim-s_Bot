module.exports = {
  name: "access-Denied",
  description: "Not enough permissions to run a command",
  execute(message, args, Discord) {
    let accessDeniedEmbed = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setTitle("Not enough permissions or wrong channel.")
      .setDescription(
        "Only usable by Admin and please use this command only in the #role-management channel."
      );

    message.channel.send(accessDeniedEmbed);
  },
};
