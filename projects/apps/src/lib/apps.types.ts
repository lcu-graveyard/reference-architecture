export class ApplicationModel {
	public API: ApplicationAPIProxy;

	public BuildingForID: string;

	public Description: string;

	public Hosts: string[];

	public ID: string;

	public Lookup: ApplicationLookupModel;

	public Name: string;

	public Priority: number;

	public Proxy: { Application: string, Service: string };

	public Security: ApplicationSecurityModel;

	public View: ApplicationViewModel;
}

export class ApplicationAPIProxy {
	public Connection: { Application: string, Service: string };

	public Prefix: string;

	public Proxies: ApplicationAPIProxySetup[];
}

export class ApplicationAPIProxySetup {
	public Connection: { Application: string, Service: string };

	public From: string;

	public To: string;
}

export class ApplicationLookupModel {
	public Claims: LookupClaimModel[];

	public IsReadOnly: boolean;

	public PathRegex: string;

	public QueryRegex: string;

	public RoleSets: SecurityRoleSet[];

	public UserAgentRegex: string;
}

export class LookupClaimModel {
	public CheckWithout: boolean;

	public Type: string;

	public Values: string[];
}

export class SecurityRoleSet {
	public Roles: string[];
}

export class ApplicationSecurityModel {
	public Lock: boolean;

	public RedirectTo: string;
}

export class ApplicationViewModel {
	public AdobeTypekit: string;

	public ApplicationName: string;

	public BaseHref: string;

	public FilesRoot: string;

	public Google: { Analytics: string, MapKey: string };
}