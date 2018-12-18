import { Time } from "@angular/common";

export class PowerBIConfig {
    public ApiUrl: string;

    public AuthorityUrl: string;

    public ClientID: string;

    public GroupID: string;

    public Password: string;

    public ResourceUrl: string;

    public Username: string;
}

export class ReportingConfig {
    public PowerBIConfigs: { [name: string]: PowerBIConfig };

}