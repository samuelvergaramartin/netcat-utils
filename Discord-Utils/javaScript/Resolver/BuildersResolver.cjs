const NetCatIntentsdata = import('../Build/IntentsBuilder.js');

NetCatIntentsdata.then(PromiseResolve => {
    const NetCatIntents = {
    GUILDS: PromiseResolve.default.GUILDS,
    GUILD_MEMBERS: PromiseResolve.default.GUILD_MEMBERS,
    GUILD_MODERATION: PromiseResolve.default.GUILD_MODERATION,
    GUILD_EMOJIS_AND_STICKERS: PromiseResolve.default.GUILD_EMOJIS_AND_STICKERS,
    GUILD_INTEGRATIONS: PromiseResolve.default.GUILD_INTEGRATIONS,
    GUILD_WEBHOOKS: PromiseResolve.default.GUILD_WEBHOOKS,
    GUILD_INVITES: PromiseResolve.default.GUILD_INVITES,
    GUILD_VOICE_STATES: PromiseResolve.default.GUILD_VOICE_STATES,
    GUILD_PRESENCES: PromiseResolve.default.GUILD_PRESENCES,
    GUILD_MESSAGES: PromiseResolve.default.GUILD_MESSAGES,
    GUILD_MESSAGE_REACTIONS: PromiseResolve.default.GUILD_MESSAGE_REACTIONS,
    GUILD_MESSAGE_TYPING: PromiseResolve.default.GUILD_MESSAGE_TYPING,
    DIRECT_MESSAGES: PromiseResolve.default.DIRECT_MESSAGES,
    DIRECT_MESSAGE_REACTIONS: PromiseResolve.default.DIRECT_MESSAGE_REACTIONS,
    DIRECT_MESSAGE_TYPING: PromiseResolve.default.DIRECT_MESSAGE_TYPING,
    MESSAGE_CONTENT: PromiseResolve.default.MESSAGE_CONTENT,
    GUILD_SCHEDULED_EVENTS: PromiseResolve.default.GUILD_SCHEDULED_EVENTS,
    AUTO_MODERATION_CONFIGURATION: PromiseResolve.default.AUTO_MODERATION_CONFIGURATION,
    AUTO_MODERATION_EXECUTION: PromiseResolve.default.AUTO_MODERATION_EXECUTION
}

module.exports = NetCatIntents;
})