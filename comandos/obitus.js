const config = require('../config.json')
exports.run = (client, message, args) => {
    if(message.guild && message.content.startsWith('obitus-obitus') && message.author.id === config["user-id"]){
        message.channel.send(`⠀⠀⠀██████╗   ██████╗   ██╗████████╗██╗   ██╗   ███████╗
        ██      ██╗   ██╔══██╗██║╚══██╔══╝██║   ██║   ██╔════╝
        ██      ██║   ██████╔╝██║          ██            ██║   ██║   ███████╗
        ██      ██║   ██╔══██╗██║          ██            ██║   ██║   ╚════██║
        ██████╔   ██████╔╝██║          ██            ██████╔╝███████║`)
    }
    message.delete()
}