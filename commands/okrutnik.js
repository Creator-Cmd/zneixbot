module.exports = {
    name: `okrutnik`,
    description: `gj3ighwighwergrkgw`,
    execute(message, database, config, bot) {
        // if (!database.guilds[message.guild.id]) return null;
        // if (database.guilds[message.guild.id].papiez === `false`) return null;
        let role = message.guild.roles.find(r => r.name === config.papiez.names.role);
        if (!role) return message.react('🇪');
        message.guild.members.get(message.author.id).addRole(role)
        .then(() => console.log(`added role '${role.name}' to '${message.author.tag}'`))
        .then(() => message.react('👍'));
    },
};