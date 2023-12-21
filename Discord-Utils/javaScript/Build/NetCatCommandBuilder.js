const CommandSchema = require('../Schemas/CommandBuilderSchema');

class APINetCatCommandBuilder {
    constructor(data = {}) {
        this.id = data.id ?? undefined;
        this.type = data.type ?? 1;
        this.application_id = data.application_id ?? undefined;
        this.guild_id = data.guild_id ?? undefined;
        this.name = data.name ?? undefined;
        this.name_localizations = data.name_localizations ?? undefined; //arreglar luego
        this.description = data.description ?? undefined;
        this.description_localizations = data.description_localizations ?? undefined //arreglar luego
        this.options = data.options ?? undefined //arreglar luego
        this.default_member_permissions = data.default_member_permissions ?? undefined //arreglar luego
        this.dm_permission = data.dm_permission ?? undefined; //arreglar luego
        this.default_permission = data.default_permission ?? undefined //arreglar luego
        this.nsfw = data.nsfw ?? false;
        this.version = dara.version ?? undefined;
    }
}

module.exports = APINetCatCommandBuilder;