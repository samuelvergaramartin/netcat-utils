import CommandBuilderSchema from '../Schemas/CommandBuilder';

const CommandSchema : CommandBuilderSchema = {
    Command: {
        type: {
            slash: 1,
            user: 2,
            message: 3
        },
        options: {
            type: {
                subcommand: 1,
                subcommandgroup:2,
                string: 3,
                integer: 4,
                boolean: 5,
                user: 6,
                channel: 7,
                role: 8,
                mentionable: 9,
                number: 10,
                attachment: 11
            },
            channeltypes: {
                guild_text: 0,
                dm: 1,
                guild_voice: 2,
                group_dm: 3,
                guild_category: 4,
                guild_announcement: 5,
                announcement_thread: 10,
                public_thread: 11,
                private_thread: 12,
                guild_stage_voice: 13,
                guild_directory: 14,
                guild_forum: 15
            }
        }
    }
}

export default CommandSchema;