const {
    MessageEmbed
} = require("discord.js");
const db = require("quick.db");
const config = require('../../Settings/Configuration/config.json')

module.exports = {
    name: "checkdonate",
    aliases: ["cash"],
    description: "Check money",
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        
        const embed = new MessageEmbed()
        embed.setTitle('Economy System')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author
        const donate = await db.get(`clan-${user.id}`)
        if (!user){
            embed.setColor("RED")
            embed.setDescription(`> :x: Vui lòng tag một người dùng để xem!`)
            return message.channel.send({embeds: [embed]})
        }else{
            embed.setColor("BLUE")
            embed.setDescription(`Người dùng <@${user.id}> đã donate \`${donate || 0}\` cho clan!`)
            return message.channel.send({embeds: [embed]})
        }
        
    }
}