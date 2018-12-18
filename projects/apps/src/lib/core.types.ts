import { JSONSchema } from "@lcu/common";
import { ForgeThemeConfiguration } from '@lcu/elements';
import { ForgeJSONSchema } from "./flow.types";

export class ForgeSettings {
	public Platforms: PlatformConfiguration[];

	public Theme: ForgeThemeConfiguration;
}

export class PlatformConfiguration {
	public Details: any;

	public Lookup: string;

	public Name: string;
}

export class JSONSchemaMap {
	public Active: boolean;

	public Data: any;

	public Description: string;

	public ID: string;

	public IncommingSchemaID: string;

	public IncommingPropertyID: string;

	public Lookup: string;

	public Name: string;

	public OutgoingSchemaID: string;

	public OutgoingPropertyID: string;

	public Schema: ForgeJSONSchema;
}

export class DataMapperConfig {
	public Details: DataMapperMappedDetails | DataMapperFlowDetails;

	public MapType: 'Flow' | 'Mapped' | 'Ordered' | 'ShowHide';
}

export class DataMapperFlowDetails {
}

export class DataMapperMappedDetails {
	public Map: { [input: string]: DataMapperMapping };
}

export class DataMapperShowHideDetails {
	public Left: DataMapperMapping;

	public Right: DataMapperMapping;
}

export class DataMapperMapping {
	public DataKey?: string;

	public Output: string;

	public Reference: 'Data' | 'Context' | number;
}