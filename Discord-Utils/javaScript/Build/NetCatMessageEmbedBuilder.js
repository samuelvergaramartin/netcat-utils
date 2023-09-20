var x = -1;
class APINetCatMessageEmbedBuilder {
    constructor(data = {}) {
        this.title = data.title ?? undefined;
        this.style = data.style ?? "rich";
        this.description = data.description ?? undefined;
        this.url = data.url ?? undefined;
        this.timestamp = data.timestamp ?? undefined;
        this.color = data.color ?? undefined;
        this.footer = data.footer ? {
            text: data.footer.text,
            icon_url: data.footer.icon_url,
            proxy_icon_url: data.footer.proxy_icon_url 
        } : undefined;
        this.image = data.image ? {
            url: data.image.url,
            proxy_url: data.image.proxy_url,
            height: data.image.height,
            width: data.image.width
        } : undefined;
        this.thumbnail = data.thumbnail ? {
            url: data.thumbnail.url,
            proxy_url: data.thumbnail.proxy_url,
            height: data.thumbnail.height,
            width: data.thumbnail.width
        } : undefined;
        this.video = data.video ? {
            url: data.video.url,
            proxy_url: data.video.proxy_url,
            height: data.video.height,
            width: data.video.width
        } : undefined;
        this.provider = data.provider ? {
            name: data.provider.name,
            url: data.provider.url
        } : undefined;
        this.author = data.author ? {
            name: data.author.name,
            url: data.author.url,
            icon_url: data.author.icon_url,
            proxy_icon_url: data.author.proxy_icon_url
        } : undefined;
        this.fields = data.fields ?? [];
    }

    setEmbedTitle(title) {
        this.title = title;
        return this;
    }
    setEmbedStyle(style) {
        this.style = style;
        return this;
    }
    setEmbedDescription(description) {
        this.description = description;
        return this;
    }
    setEmbedUrl(url) {
        this.url = url;
        return this;
    }
    setEmbedTimestamp(timestamp) {
        this.timestamp = APINetCatMessageEmbedBuilder.GenerateTimestamp(timestamp)
        return this;
    }
    setEmbedColor(color) {
        this.color = APINetCatMessageEmbedBuilder.resolveEmbedColor(color);
        return this;
    }
    setEmbedFooter(footer) {
        this.footer = footer ? {
            text: footer.text,
            icon_url:footer.icon_url ?? undefined,
            proxy_icon_url: footer.proxy_icon_url ?? undefined
        } : undefined;
        return this;
    }
    setEmbedImage(image) {
        this.image = image ? {
            url: image.url,
            proxy_url: image.proxy_url ?? undefined,
            height: image.height ?? undefined,
            width: image.width ?? undefined
        } : undefined;
        return this;
    }
    setEmbedHeaderImage(thumbnail) {
        this.thumbnail = thumbnail ? {
            url: thumbnail.url,
            proxy_url: thumbnail.proxy_url ?? undefined,
            height: thumbnail.height ?? undefined,
            width: thumbnail.width ?? undefined
        } : undefined;
        return this;
    }
    setEmbedVideo(video) {
        this.video = video;
        return this;
    }
    setEmbedProvider(provider) {
        this.provider = provider;
        return this;
    }
    setEmbedAuthor(author) {
        this.author = author ? {
            name: author.name,
            url: author.url ?? undefined,
            icon_url: author.icon_url ?? undefined,
            proxy_icon_url: author.proxy_icon_url ?? undefined
        } : undefined;
        return this;
    }
    addEmbedFields(...fields) {
        for(var i = 0; i < fields.length; i++) {
            if(typeof fields[i] == "object") {
                if(Array.isArray(fields[i])) {
                    x = fields.length;
                    continue;
                }
                if(!Array.isArray(fields[i])) throw new Error("NetCatAPIError: En .addEmbedFields()\nUno o más Fields no van dentro de un array.\nTodos los Fields deben ir dentro de un array.");
            }
            if(typeof fields[i] !== "object") throw new Error("NetCatAPIError: En .addEmbedFields()\nEl valor introducido no es de tipo 'object'\nEl valor introducido debe ser un array de objetos!");
        }
        if(x == fields.length) {
            fields[0]?.map((field) => this.fields.push(APINetCatMessageEmbedBuilder.GenerateFieldObject(field)));
            return this;
        }
    }
    setEmbedField(fieldName, fieldValue, fieldInline) {
        const field = {
            name: fieldName,
            value: fieldValue,
            inline: fieldInline ?? undefined
        }
        this.fields.push(field);
        return this;
    }
    setNetCatEmbedTimestamp(NetCatTimestamp) {
        if(!this.description) {
            this.description = "";
        }
        NetCatTimestamp = this.description;
        const result = APINetCatMessageEmbedBuilder.GenerateNetCatTimestamp(NetCatTimestamp);
        this.description = result;
        return this;
    }
    static GenerateNetCatTimestamp(data) {
        const date = Date.now();
        const dateResult = Math.trunc(date / 1000);
        const resultadoFinal = `${data}` + `\n\nMensaje enviado <t:${dateResult}:R>`;
        return resultadoFinal;
    }
    static GenerateTimestamp(date = Date.now()) {
        if(date == null) return null;
        if(date instanceof Date) return date.toISOString();
        return new Date(date).toISOString();
    }
    static resolveEmbedColor(color) {
        if(typeof color == "string") {
            const getColors = new API();
            const Colors = getColors.Colors;
            color = Colors[color] ?? color.replace("#", "");
            return parseInt(color, 16);
        }
        return color;
    }
    static GenerateFieldObject(fields) {
        return {
            name: fields.name,
            value: fields.value,
            inline: fields.inline ?? false
        };
    }
}

module.exports = APINetCatMessageEmbedBuilder;