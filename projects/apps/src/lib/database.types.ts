export class DatabaseConfiguration {
	public AutoSave: boolean;

	public DBName: string;

	public DataSets: { [key: string]: DataSetConfiguration };

	public SyncSeconds: number;
}

export class DataSetConfiguration {
	public Query: DataSetQuery;

	public PartitionKey?: string;

	public Sorting: DataSetSorting;

	/** The type that the Data Set will be available by */
	public Type: string;
}

export class DataSetSorting {
	public BasicSort: string;

	public IsDesc: boolean;
}

export class DataSetQuery {
	public Limit: string;

	public OrderBy: string;

	public Parameters: { [id: string]: string };

	public Select: string;

	//public Skip: string;

	//public Take: string;

	public Singleton: boolean;

	public Where: string;
}

export class DataSetDomainConfig {
	public ManagementColumnsToDisplay: string[];

	public SchemaID: string;
}

export class DataSetCollection {
	public Data: any[];

	public Name: string;
}
