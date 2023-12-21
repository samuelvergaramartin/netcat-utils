interface CommandBuilderSchema {
    Command: {
        type: {
            slash: number,
            user: number,
            message: number
        },
        options: {
            type: {
                subcommand: number,
                subcommandgroup: number,
                string: number,
                integer: number,
                boolean: number,
                user: number,
                channel: number,
                role: number,
                mentionable: number,
                number: number,
                attachment: number,
            },
            channeltypes: {
                guild_text: number,
                dm: number,
                guild_voice: number,
                group_dm: number,
                guild_category: number,
                guild_announcement: number,
                announcement_thread: number,
                public_thread: number,
                private_thread: number
                guild_stage_voice: number,
                guild_directory: number,
                guild_forum: number
            }
        }
    }
}

export default CommandBuilderSchema;