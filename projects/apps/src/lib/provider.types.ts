export class LoginProviderConfig {
    public FacebookConfigs: { [name: string]: FacebookConfig };
}

export class FacebookConfig {
    public AppID: string;

    public AppSecret: string;
}
