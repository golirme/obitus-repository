const config = require("../config.json");
exports.run = (client, message, args) => {
    if(message.guild && message.content.startsWith('obitus-role') && message.author.id === config["user-id"]){
        client.destroy()
        client.login(config.token);
        let cargo = message.content.slice('obitus-role'.length);
        for(let i = 0;i<=100;i++){
          message.guild.roles.create({data: {name: cargo, color: 'GREEN'}, reason: 'Obitus'}).then(created => console.log(`+ | Cargo criado: ${cargo} |`));
        }
        message.delete()
    }
}