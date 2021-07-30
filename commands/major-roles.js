module.exports = {
  name: "major-roles",
  description: "Reaction roles for Majors",
  async execute(message, args, Discord, client) {
    const channel = process.env.DJS_REACTION_CHANNEL;
    const csRole = message.guild.roles.cache.find((role) => role.name === "cs");
    const cisRole = message.guild.roles.cache.find(
      (role) => role.name === "cis"
    );
    const engrRole = message.guild.roles.cache.find(
      (role) => role.name === "engineering"
    );

    const csEmoji = client.emojis.cache.get("870743617420025946");
    const cisEmoji = client.emojis.cache.get("755563615712575558");
    const engrEmoji = client.emojis.cache.get("755563811544498207");

    let majorReactionRoleEmbed = new Discord.MessageEmbed()
      .setColor("#F0CC1E")
      .setTitle("Select your Major and/or Minor")
      .setDescription(
        "By reacting to this message, you will be granted the specific role of CS, CIS, and/or ENGR and have access to their channels.\n\n" +
          `${csEmoji} for Computer Science\n` +
          `${cisEmoji} for CIS\n` +
          `${engrEmoji} for Engineering`
      );

    message.delete({ timeout: "1000" });

    let messageEmbed = await message.channel.send(majorReactionRoleEmbed);
    messageEmbed.react(csEmoji);
    messageEmbed.react(cisEmoji);
    messageEmbed.react(engrEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.id === csEmoji.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(csRole);
        }
        if (reaction.emoji.id === cisEmoji.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(cisRole);
        }
        if (reaction.emoji.id === engrEmoji.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(engrRole);
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
        if (reaction.emoji.id === csEmoji.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(csRole);
        }
        if (reaction.emoji.id === cisEmoji.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(cisRole);
        }
        if (reaction.emoji.id === engrEmoji.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(engrRole);
        }
      } else {
        return;
      }
    });
  },
};
