export interface MessagePath {
    language: string;
    path: string;
}

export interface MainModule {
    name: string;
    path: string;
    defaultLanguage: string;
}

export interface ConfigStatic {
    messages: Array<MessagePath>;
    main: MainModule;
}

export class Config {
    public messages: Object = {};
    public main: MainModule;

    public static loadFromJson(value: string): Config {
        var configStatic: ConfigStatic = <ConfigStatic>JSON.parse(value);
        return new Config(configStatic);
    }

    private constructor(configStatic: ConfigStatic) {
        for (let message of configStatic.messages) {
            this.messages[message.language] = message;
        }
        this.main = configStatic.main;
    }

    public getLanguagePath(language: string): string {
        var result: string = this.main.defaultLanguage;
        if (this.messages.hasOwnProperty(language)) {
            result = (<MessagePath>this.messages[language]).path;
        }
        return result;
    }
}