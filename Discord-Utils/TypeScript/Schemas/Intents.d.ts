interface NetCatIntentsSchema {
    NetCatIntents: {
        GUILDS: number,
        GUILD_MEMBERS: number,
        GUILD_MODERATION: number,
        GUILD_EMOJIS_AND_STICKERS: number,
        GUILD_INTEGRATIONS: number,
        GUILD_WEBHOOKS: number,
        GUILD_INVITES: number,
        GUILD_VOICE_STATES: number,
        GUILD_PRESENCES: number,
        GUILD_MESSAGES: number,
        GUILD_MESSAGE_REACTIONS: number,
        GUILD_MESSAGE_TYPING: number,
        DIRECT_MESSAGES: number,
        DIRECT_MESSAGE_REACTIONS: number,
        DIRECT_MESSAGE_TYPING: number,
        MESSAGE_CONTENT: number,
        GUILD_SHEDULED_EVENTS: number,
        AUTO_MODERATION_CONFIGURATION: number,
        AUTO_MODERATION_EXECUTION: number
    }
}

export default NetCatIntentsSchema;