const {
    MessageEmbed
} = require("discord.js");
const db = require("quick.db");
const config = require('../../Settings/Configuration/config.json')
module.exports = {
    name: "subtract",
    aliases: ["sub"],
    description: "Add money",
    cooldown: 5,
    // UserPerms: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        const amount = args[0]
        const money = await db.get(`money-${message.author.id}`)
        const embed = new MessageEmbed()
            embed.setTitle('Economy System')
        if (isNaN(parseInt(args[0])) && amount < 0 && amount < money){
            embed.setColor('RED')
            embed.setDescription('> :x: Vui lòng nhập số tiền hợp lệ!')
            return message.channel.send({embeds: [embed]})
        }else{
            
            await db.subtract(`money-${message.author.id}`, amount)
            embed.setColor('BLUE')
            embed.setDescription(`> :white_check_mark: Đã xóa \`${amount}\` từ tài khoản của bạn!`)
            return message.channel.send({embeds: [embed]})
        }
    }
}