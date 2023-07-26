const NetCatIntentsdata = require('../Build/IntentsBuilder');

const NetCatIntents = {
    GUILDS: NetCatIntentsdata.default.GUILDS,
    GUILD_MEMBERS: NetCatIntentsdata.default.GUILD_MEMBERS,
    GUILD_MODERATION: NetCatIntentsdata.default.GUILD_MODERATION,
    GUILD_EMOJIS_AND_STICKERS: NetCatIntentsdata.default.GUILD_EMOJIS_AND_STICKERS,
    GUILD_INTEGRATIONS: NetCatIntentsdata.default.GUILD_INTEGRATIONS,
    GUILD_WEBHOOKS: NetCatIntentsdata.default.GUILD_WEBHOOKS,
    GUILD_INVITES: NetCatIntentsdata.default.GUILD_INVITES,
    GUILD_VOICE_STATES: NetCatIntentsdata.default.GUILD_VOICE_STATES,
    GUILD_PRESENCES: NetCatIntentsdata.default.GUILD_PRESENCES,
    GUILD_MESSAGES: NetCatIntentsdata.default.GUILD_MESSAGES,
    GUILD_MESSAGE_REACTIONS: NetCatIntentsdata.default.GUILD_MESSAGE_REACTIONS,
    GUILD_MESSAGE_TYPING: NetCatIntentsdata.default.GUILD_MESSAGE_TYPING,
    DIRECT_MESSAGES: NetCatIntentsdata.default.DIRECT_MESSAGES,
    DIRECT_MESSAGE_REACTIONS: NetCatIntentsdata.default.DIRECT_MESSAGE_REACTIONS,
    DIRECT_MESSAGE_TYPING: NetCatIntentsdata.default.DIRECT_MESSAGE_TYPING,
    MESSAGE_CONTENT: NetCatIntentsdata.default.MESSAGE_CONTENT,
    GUILD_SCHEDULED_EVENTS: NetCatIntentsdata.default.GUILD_SCHEDULED_EVENTS,
    AUTO_MODERATION_CONFIGURATION: NetCatIntentsdata.default.AUTO_MODERATION_CONFIGURATION,
    AUTO_MODERATION_EXECUTION: NetCatIntentsdata.default.AUTO_MODERATION_EXECUTION
}

module.exports = NetCatIntents;