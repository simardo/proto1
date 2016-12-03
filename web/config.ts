export class MessagePath {
    public path: string;
}

export class MainModule {
    public name: string;
    public path: string;
}

export class Config {
    public messages: Array<MessagePath>;
    public main: MainModule;

    public static loadFromJson(value: string): Config {
        var configStatic: Config = <Config>JSON.parse(value);
        return new Config(configStatic);
    }

    private constructor(configStatic: Config) {
        this.messages = configStatic.messages;
        this.main = configStatic.main;
    }

    public toString(): string {
        return this.messages.map(message => message.path).join(",");
    }
}