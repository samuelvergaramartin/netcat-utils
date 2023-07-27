const NetCatIntents = require('../Build/IntentsBuilder');

const NetCatIntentsAll = [];

NetCatIntentsAll.push(NetCatIntents.AUTO_MODERATION_CONFIGURATION);
NetCatIntentsAll.push(NetCatIntents.AUTO_MODERATION_EXECUTION);
NetCatIntentsAll.push(NetCatIntents.DIRECT_MESSAGES);
NetCatIntentsAll.push(NetCatIntents.DIRECT_MESSAGE_REACTIONS);
NetCatIntentsAll.push(NetCatIntents.DIRECT_MESSAGE_TYPING);
NetCatIntentsAll.push(NetCatIntents.GUILDS);
NetCatIntentsAll.push(NetCatIntents.GUILD_EMOJIS_AND_STICKERS);
NetCatIntentsAll.push(NetCatIntents.GUILD_INTEGRATIONS);
NetCatIntentsAll.push(NetCatIntents.GUILD_INVITES);
NetCatIntentsAll.push(NetCatIntents.GUILD_MEMBERS);
NetCatIntentsAll.push(NetCatIntents.GUILD_MESSAGES);
NetCatIntentsAll.push(NetCatIntents.GUILD_MESSAGE_REACTIONS);
NetCatIntentsAll.push(NetCatIntents.GUILD_MESSAGE_TYPING);
NetCatIntentsAll.push(NetCatIntents.GUILD_MODERATION);
NetCatIntentsAll.push(NetCatIntents.GUILD_PRESENCES);
NetCatIntentsAll.push(NetCatIntents.GUILD_SCHEDULED_EVENTS);
NetCatIntentsAll.push(NetCatIntents.GUILD_VOICE_STATES);
NetCatIntentsAll.push(NetCatIntents.GUILD_WEBHOOKS);
NetCatIntentsAll.push(NetCatIntents.MESSAGE_CONTENT);

module.exports = NetCatIntentsAll;