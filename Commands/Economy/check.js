const {
    MessageEmbed
} = require("discord.js");
const db = require("quick.db");
const config = require('../../Settings/Configuration/config.json')

module.exports = {
    name: "check",
    aliases: ["cash"],
    description: "Check money",
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        
        const embed = new MessageEmbed()
            embed.setTitle('Economy System')
        const money = await db.get(`money-${message.author.id}`)
        embed.setColor('BLUE')
        embed.setDescription(`> Bạn có \`${money || 0}\` trong tài khoản của bạn!`)
        return message.channel.send({embeds: [embed]})
    }
}