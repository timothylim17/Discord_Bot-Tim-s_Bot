module.exports = {
  name: "misc-roles",
  description: "Reaction roles for misc roles",
  async execute(message, args, Discord, client) {
    const channel = process.env.DJS_REACTION_CHANNEL;
    const roles = getRoles(message);
    const emojis = getEmojis(client);
    const roleNames = getRoleNames();

    let descriptionEmbed =
      "By reacting to this message, you will recieve access to the channel of the corresponding role\n\n";

    for (let i = 0; i < emojis.length; i++) {
      descriptionEmbed += `${emojis[i]} for ${roleNames[i]}\n`;
    }

    let miscReactionRoleEmbed = new Discord.MessageEmbed()
      .setColor("#1d903f")
      .setTitle("Select your special roles")
      .setDescription(descriptionEmbed);

    message.delete({ timeout: "1000" });

    let messageEmbed = await message.channel.send(miscReactionRoleEmbed);
    for (let i = 0; i < emojis.length; i++) {
      messageEmbed.react(emojis[i]);
    }

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        for (let i = 0; i < emojis.length; i++) {
          if (reaction.emoji.id === emojis[i].id) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.add(roles[i]);
          }
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
        for (let i = 0; i < emojis.length; i++) {
          if (reaction.emoji.id === emojis[i].id) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.remove(roles[i]);
          }
        }
      } else {
        return;
      }
    });
  },
};

var getRoles = function (message) {
  const apuRole = message.guild.roles.cache.find((role) => role.name === "APU");
  const gamesRole = message.guild.roles.cache.find(
    (role) => role.name === "games"
  );
  const amongusRole = message.guild.roles.cache.find(
    (role) => role.name === "among us"
  );
  const mcRole = message.guild.roles.cache.find(
    (role) => role.name === "minecraft"
  );
  const genshinRole = message.guild.roles.cache.find(
    (role) => role.name === "genshin"
  );
  const weebRole = message.guild.roles.cache.find(
    (role) => role.name === "weeb"
  );
  const chapelRole = message.guild.roles.cache.find(
    (role) => role.name === "chapel"
  );
  const symptomTracker = message.guild.roles.cache.find(
    (role) => role.name === "symptom-tracker"
  );

  const roleArray = [
    apuRole,
    gamesRole,
    amongusRole,
    mcRole,
    genshinRole,
    weebRole,
    chapelRole,
    symptomTracker,
  ];

  return roleArray;
};

var getEmojis = function (client) {
  const apuEmoji = client.emojis.cache.get("870051877067313162");
  const gamesEmoji = client.emojis.cache.get("866182639215575051");
  const amongusEmoji = client.emojis.cache.get("870046447255568445");
  const mcEmoji = client.emojis.cache.get("870043811668193380");
  const genshinEmoji = client.emojis.cache.get("870043696408707073");
  const weebEmoji = client.emojis.cache.get("870046227302068254");
  const chapelEmoji = client.emojis.cache.get("940304040837939230");
  const symptomTrackerEmoji = client.emojis.cache.get("940303793176870955");

  const emojiArray = [
    apuEmoji,
    gamesEmoji,
    amongusEmoji,
    mcEmoji,
    genshinEmoji,
    weebEmoji,
    chapelEmoji,
    symptomTrackerEmoji,
  ];

  return emojiArray;
};

var getRoleNames = function () {
  const roleNameArray = [
    "APU",
    "games",
    "among us",
    "minecraft",
    "genshin",
    "weeb",
    "chapel",
    "symptom-tracker",
  ];

  return roleNameArray;
};
