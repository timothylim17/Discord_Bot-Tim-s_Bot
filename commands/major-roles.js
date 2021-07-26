module.exports = {
  name: "major-roles",
  description: "Reaction roles for Majors",
  async execute(message, args, Discord, client) {
    const channel = process.env.DJS_REACTION_CHANNEL;
    const roleCS = message.guild.roles.cache.find((role) => role.name === "cs");
    const roleCIS = message.guild.roles.cache.find(
      (role) => role.name === "cis"
    );
    const roleENGR = message.guild.roles.cache.find(
      (role) => role.name === "engineering"
    );

    const emojiCS = "😀";
    const emojiCIS = "😬";
    const emojiENGR = "😱";

    let majorReactionRoleEmbed = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setTitle("Select your Major and/or Minor")
      .setDescription(
        "By reacting to this message, you will be granted the specific role of CS, CIS, and/or ENGR and have access to their channels.\n\n" +
          `${emojiCS} for Computer Science\n` +
          `${emojiCIS} for CIS\n` +
          `${emojiENGR} for Engineering`
      );

    message.delete({ timeout: "2000" });

    let messageEmbed = await message.channel.send(majorReactionRoleEmbed);
    messageEmbed.react(emojiCS);
    messageEmbed.react(emojiCIS);
    messageEmbed.react(emojiENGR);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.id === emojiCS) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(roleCS);
        }
        if (reaction.emoji.id === emojiCIS) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(roleCIS);
        }
        if (reaction.emoji.id === emojiENGR) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(roleENGR);
        }
      } else {
        return;
      }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.id === emojiCS.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(roleCS);
        }
        if (reaction.emoji.id === emojiCIS.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(roleCIS);
        }
        if (reaction.emoji.id === emojiENGR.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(roleENGR);
        }
      } else {
        return;
      }
    });
  },
};
