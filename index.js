const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

//This Is The Welcome Message

client.on(`guildMemberAdd`, member =>{
      const channel = member.guild.channels.cache.find(channel => channel.name === "welcome-leaves");
      if(!channel) return;
      const embed = new Discord.MessageEmbed()
      .setDescription(`Welcome **${member.user.tag}**, to **${member.guild.name}**!`)
      .setThumbnail(member.user.displayAvatarURL())
      .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
      .setTimestamp()
      .setColor("#ff9dbb")
      channel.send(embed)
});

//This Is The Member Left Message didnt make this one into a embed but you can if you want

client.on(`guildMemberRemove`, member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome-leaves");
        if(!channel) return;
        channel.send(`**${member.user.tag}**, **HAS LEFT, Guess He Didnt Live To Tell His Story! :skull_crossbones:**`)
});

client.login(config.token);
