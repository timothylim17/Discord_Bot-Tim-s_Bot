module.exports = {
  name: "engr-class-roles",
  description: "Reaction roles for ENGR Classes",
  async execute(message, args, Discord, client) {
    const channel = process.env.DJS_REACTION_CHANNEL;
    const roles = getENGRRoles(message);
    const emojis = getENGREmojis();
    const roleNames = getENGRRoleNames();

    let descriptionEmbed =
      "By reacting to this message, you will recieve access to the channel of the corresponding class\n\n";

    for (let i = 0; i < emojis.length; i++) {
      descriptionEmbed += `${emojis[i]} for ${roleNames[i]}\n`;
    }

    let engrReactionRoleEmbed = new Discord.MessageEmbed()
      .setColor("#37718E")
      .setTitle("Select your ENGR classes")
      .setDescription(descriptionEmbed);

    message.delete({ timeout: "1000" });

    let messageEmbed = await message.channel.send(engrReactionRoleEmbed);
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
          if (reaction.emoji.name === emojis[i]) {
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
          if (reaction.emoji.name === emojis[i]) {
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

var getENGRRoles = function (message) {
  const engr150Role = message.guild.roles.cache.find(
    (role) => role.name === "engr150"
  );
  const engr210Role = message.guild.roles.cache.find(
    (role) => role.name === "engr210"
  );
  const engr215Role = message.guild.roles.cache.find(
    (role) => role.name === "engr215"
  );
  const engr240Role = message.guild.roles.cache.find(
    (role) => role.name === "engr240"
  );
  const engr245Role = message.guild.roles.cache.find(
    (role) => role.name === "engr245"
  );
  const engr271Role = message.guild.roles.cache.find(
    (role) => role.name === "engr271"
  );
  const engr310Role = message.guild.roles.cache.find(
    (role) => role.name === "engr310"
  );
  const engr325Role = message.guild.roles.cache.find(
    (role) => role.name === "engr325"
  );
  const engr340Role = message.guild.roles.cache.find(
    (role) => role.name === "engr340"
  );
  const engr345Role = message.guild.roles.cache.find(
    (role) => role.name === "engr345"
  );
  const engr420Role = message.guild.roles.cache.find(
    (role) => role.name === "engr420"
  );
  const engr470Role = message.guild.roles.cache.find(
    (role) => role.name === "engr470"
  );
  const engr480Role = message.guild.roles.cache.find(
    (role) => role.name === "engr480"
  );
  const engr491Role = message.guild.roles.cache.find(
    (role) => role.name === "engr491"
  );

  const roleArray = [
    engr150Role,
    engr210Role,
    engr215Role,
    engr240Role,
    engr245Role,
    engr271Role,
    engr310Role,
    engr325Role,
    engr340Role,
    engr345Role,
    engr420Role,
    engr470Role,
    engr480Role,
    engr491Role,
  ];

  return roleArray;
};

var getENGREmojis = function () {
  const engr150 = "😃";
  const engr210 = "😉";
  const engr215 = "😍";
  const engr240 = "😗";
  const engr245 = "😋";
  const engr271 = "🤪";
  const engr310 = "🤨";
  const engr325 = "🤓";
  const engr340 = "😏";
  const engr345 = "😟";
  const engr420 = "😣";
  const engr470 = "😫";
  const engr480 = "🥺";
  const engr491 = "😤";

  const emojiArray = [
    engr150,
    engr210,
    engr215,
    engr240,
    engr245,
    engr271,
    engr310,
    engr325,
    engr340,
    engr345,
    engr420,
    engr470,
    engr480,
    engr491,
  ];

  return emojiArray;
};

var getENGRRoleNames = function () {
  const roleNameArray = [
    "engr150",
    "engr210",
    "engr215",
    "engr240",
    "engr245",
    "engr271",
    "engr310",
    "engr325",
    "engr340",
    "engr345",
    "engr420",
    "engr470",
    "engr480",
    "engr491",
  ];

  return roleNameArray;
};
