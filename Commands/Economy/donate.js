const {
    MessageEmbed
} = require("discord.js");
const db = require("quick.db");
const config = require('../../Settings/Configuration/config.json')
module.exports = {
    name: "clan",
    aliases: ["donate"],
    description: "Donate money",
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        if (args[0] == 'donate'){
            const amount = args[1]
            const money = await db.get(`money-${message.author.id}`)
            const embed = new MessageEmbed()
                embed.setTitle('Economy System')
            if (isNaN(parseInt(args[1])) && amount < 0 && amount < money){
                embed.setColor('RED')
                embed.setDescription('> :x: Vui lòng nhập số tiền hợp lệ!')
                return message.channel.send({embeds: [embed]})
            }else{
                await db.add(`clan`, amount)
                await db.add(`clan-${message.author.id}`, amount)
                await db.subtract(`money-${message.author.id}`, amount)
                embed.setColor('BLUE')
                embed.setDescription(`> :white_check_mark: Đã donate \`${amount}\` cho clan!`)
                return message.channel.send({embeds: [embed]})
            }
        }else{
            const embed = new MessageEmbed()
            embed.setTitle('Economy System')
            const money = await db.get(`clan`)
            embed.setColor('BLUE')
            embed.setDescription(`> Clan có \`${money || 0}\` trong tài khoản!`)
            return message.channel.send({embeds: [embed]})
        }
    }
}