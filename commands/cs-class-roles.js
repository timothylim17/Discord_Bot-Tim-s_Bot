module.exports = {
  name: "cs-class-roles",
  description: "Reaction roles for CS Classes",
  async execute(message, args, Discord, client) {
    const channel = process.env.DJS_REACTION_CHANNEL;
    const roles = getCSRoles(message);
    const emojis = getCSEmojis(client);
    const roleNames = getCSRoleNames();

    message.delete({ timeout: "1000" });

    let i,j, chunk = 20;
    for (i = 0,j = emojis.length; i < j; i += chunk) {

      let emotesSubArr = emojis.slice(i, i + chunk);
      let roleNamesSubArr = roleNames.slice(i, i + chunk);

      let descriptionEmbed =
        "By reacting to this message, you will recieve access to the channel of the corresponding role\n\n";

      for (let i = 0; i < emotesSubArr.length; i++) {
        descriptionEmbed += `${emotesSubArr[i]} for ${roleNamesSubArr[i]}\n`;
      }

      let miscReactionRoleEmbed = new Discord.MessageEmbed()
        .setColor("#e6e6fa")
        .setTitle("Select your CS classes")
        .setDescription(descriptionEmbed);

      let messageEmbed = await message.channel.send(miscReactionRoleEmbed);
      for (let i = 0; i < emotesSubArr.length; i++) {
        messageEmbed.react(emotesSubArr[i]);
      }
    }

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        console.log(reaction.emoji.name);
        for (let i = 0; i < emojis.length; i++) {
          if (reaction.emoji.name === emojis[i] || reaction.emoji.id === emojis[i].id) {
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
          if (reaction.emoji.name === emojis[i] || reaction.emoji.id === emojis[i].id) {
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

//? TODO: Try to find a way to import instead of this
var getCSRoles = function (message) {
  const cs120Role = message.guild.roles.cache.find(
    (role) => role.name === "cs120"
  );
  const cs125Role = message.guild.roles.cache.find(
    (role) => role.name === "cs125"
  );
  const cs160Role = message.guild.roles.cache.find(
    (role) => role.name === "cs160"
  );
  const cs230Role = message.guild.roles.cache.find(
    (role) => role.name === "cs230"
  );
  const cs260Role = message.guild.roles.cache.find(
    (role) => role.name === "cs260"
  );
  const cs290Role = message.guild.roles.cache.find(
    (role) => role.name === "cs290"
  );
  const cs315Role = message.guild.roles.cache.find(
    (role) => role.name === "cs315"
  );
  const cs325Role = message.guild.roles.cache.find(
    (role) => role.name === "cs325"
  );
  const cs360Role = message.guild.roles.cache.find(
    (role) => role.name === "cs360"
  );
  const cs363Role = message.guild.roles.cache.find(
    (role) => role.name === "cs363"
  );
  const cs430Role = message.guild.roles.cache.find(
    (role) => role.name === "cs430"
  );
  const cs432Role = message.guild.roles.cache.find(
    (role) => role.name === "cs432"
  );
  const cs440Role = message.guild.roles.cache.find(
    (role) => role.name === "cs440"
  );
  const cs452Role = message.guild.roles.cache.find(
    (role) => role.name === "cs452"
  );
  const cs465Role = message.guild.roles.cache.find(
    (role) => role.name === "cs465"
  );
  const cs470Role = message.guild.roles.cache.find(
    (role) => role.name === "cs470"
  );
  const cs480Role = message.guild.roles.cache.find(
    (role) => role.name === "cs480"
  );
  const cs484Role = message.guild.roles.cache.find(
    (role) => role.name === "cs484"
  );
  const cs491Role = message.guild.roles.cache.find(
    (role) => role.name === "cs491"
  );
  const cs495Role = message.guild.roles.cache.find(
    (role) => role.name === "cs495"
  );
  const cs496Role = message.guild.roles.cache.find(
    (role) => role.name === "cs496"
  );

  const roleArray = [
    cs120Role,
    cs125Role,
    cs160Role,
    cs230Role,
    cs260Role,
    cs290Role,
    cs315Role,
    cs325Role,
    cs360Role,
    cs363Role,
    cs430Role,
    cs432Role,
    cs440Role,
    cs452Role,
    cs465Role,
    cs470Role,
    cs480Role,
    cs484Role,
    cs491Role,
    cs495Role,
    cs496Role,
  ];

  return roleArray;
};

var getCSEmojis = function (client) {
  const cs120Emoji = "😀";
  const cs125Emoji = "😁";
  const cs160Emoji = "😆";
  const cs230Emoji = "😅";
  const cs260Emoji = "😂";
  const cs290Emoji = "🤣";
  const cs315Emoji = "😇";
  const cs325Emoji = "🙂";
  const cs360Emoji = "🙃";
  const cs363Emoji = "🥰";
  const cs430Emoji = "😘";
  const cs432Emoji = "😛";
  const cs440Emoji = "🧐";
  const cs452Emoji = "😎";
  const cs465Emoji = "🤩";
  const cs470Emoji = "🥳";
  const cs480Emoji = "😏";
  const cs484Emoji = "😞";
  const cs491Emoji = "💀";
  const cs495Emoji = "☠️";
  const cs496Emoji = client.emojis.cache.get("940303139649781810");

  const emojiArray = [
    cs120Emoji,
    cs125Emoji,
    cs160Emoji,
    cs230Emoji,
    cs260Emoji,
    cs290Emoji,
    cs315Emoji,
    cs325Emoji,
    cs360Emoji,
    cs363Emoji,
    cs430Emoji,
    cs432Emoji,
    cs440Emoji,
    cs452Emoji,
    cs465Emoji,
    cs470Emoji,
    cs480Emoji,
    cs484Emoji,
    cs491Emoji,
    cs495Emoji,
    cs496Emoji,
  ];

  return emojiArray;
};

var getCSRoleNames = function () {
  const roleArray = [
    "cs120",
    "cs125",
    "cs160",
    "cs230",
    "cs260",
    "cs290",
    "cs315",
    "cs325",
    "cs360",
    "cs363",
    "cs430",
    "cs432",
    "cs440",
    "cs452",
    "cs465",
    "cs470",
    "cs480",
    "cs484",
    "cs491",
    "cs495",
    "cs496",
  ];

  return roleArray;
};
