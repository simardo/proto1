class MessagePath {
    public path: string;
}

export class Config {
    public static loadFromJson(value: string): Config {
        var configStatic: Config = <Config>JSON.parse(value);
        return new Config(configStatic.messages); 
    }

    private constructor(public messages: Array<MessagePath>) {
        
    }

    public toString(): string {
        return this.messages.map(message => message.path).join(",");
    }
}