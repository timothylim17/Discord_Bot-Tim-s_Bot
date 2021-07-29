module.exports = {
  name: "tim-help",
  description: "Get a list of commands from Tim's Bot",
  execute(message, args, Discord, client, fs) {
    fs.readdir("./commands/", (err, files) => {
      if (err) console.error(err);

      let jsFiles = files.filter((f) => f.split(".").pop("js"));
      if (jsFiles.length <= 0) {
        console.log("No commands to load!");
        return;
      }

      var namelist = [];
      var desclist = [];
      let description = "";

      jsFiles.forEach((f, i) => {
        let props = require(`./${f}`);
        namelist.push(props.name);
        desclist.push(props.description);
      });

      for (let i = 1; i < jsFiles.length; i++) {
        description += `**!${namelist[i]}:** ${desclist[i]}\n`;
      }

      let helpEmbed = new Discord.MessageEmbed()
        .setColor("#e42643")
        .setTitle("List of commands from Tim's Bot!")
        .setDescription(description);

      message.channel.send(helpEmbed);
    });
  },
};
