export class AccessConfigModel {
	public AccessRightIDs: string[];

	public Type: string;
}

export class AccessRightModel {
	public Description: string;

	public ID: string;

	public Lookup: string;

	public Name: string;
}

export class ClaimModel {
	public ClaimType: string;

	public Value: string;
}

export class OrganizationIdentityModel {
	public Profile: any;

	public Username: string;
}

export class ProviderModel {
	public Type: string;

	public AppID: string;

	public AppSecret: string;

	public Metadata: { [key: string]: string};
}