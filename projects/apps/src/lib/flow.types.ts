import { JSONSchemaMap } from "./core.types";
import { JSONSchema } from "@lcu/common";

export class FlowEventMethod {
	public Data: any;

	public Event: string;

	public Function: Function;

	public Identifier: string;
}

export class FlowsConfig {
	public OrganizationLookup: string;

	public OrganizationName: string;
}

export class ModuleSchemaConfig {
	public SchemaFunctions: SchemaFunctionRef[];

	public SchemaMaps: JSONSchemaMap[];

	public SchemaNodes: SchemaNode[];

	public SchemaFunctionReturns: SchemaFunctionReturn[];

	public HasErrors: boolean;
}

export class SchemaFunctionReturn {
	public ExternalSchemaID: string;

	public NodeID: string;

	public PropertyID: string;

	public SchemaFunctionsReturnSourceID: string;

	public SchemaFunctionsReturnSource: string;

	public SchemaFunctionsReturnValue: string;

	public SchemaFunctionsReturnValueType: string;

	public Type: string;
}

export class SchemaNode {
	public ID: string;

	public Data: any;

	public JSONSchemaID: string;
}

export class SetupStateModel {
	public InitialSetupComplete: boolean;

	public OrganizationInitialized: boolean;
}

export class FlowConfig {
	public Active: boolean;

	public CanProvision: boolean;

	public Description: string;

	public Deleted: boolean;

	public ID: string;

	public Lookup: string;

	public Modules: FlowModule[];

	public Name: string;

	public ProvisionStatus: string;

	public Streams: FlowStream[];
}

export class ForgeJSONSchema extends JSONSchema {
    sourceRef?: string;

    sourceTitle?: string;
}

export class FlowModuleOption {
	public Active: boolean;

	public Application: string;

	public Catalog: string;

	public Category: string;

	public ControlType: ModuleControlTypes;

	public Description: string;

	public Height: number;

	public Icon: string;

	public ID: string;

	public IncomingConnectionLimit: number;

	public IncomingConnectionTypes: string[];

	public ManagementPath: string;

	public ManagerHeight: number;

	public ManagerWidth: number;

	public ModuleType: string;

	public Name: string;

	public OutgoingConnectionLimit: number;

	public OutgoingConnectionTypes: string[];

	public Service: string;

	public Shape: string;

	public Width: number;

	public Visible: boolean;
}

export class Device {
	public Active: boolean;

    public AuthMethod: DeviceAuthenticationMethod;

	public ConnectionString: string;

	public Description: string;

	public DeviceID: string;

	public ID: string;

	public Lookup: string;

	public Name: string;

	public Status: DeviceStatus;

    public ConnectionState: ConnectionState;

	public PrimaryKey: string;

	public SecondaryKey: string;

	public Selected: boolean;
}

export class FlowModule extends FlowModuleOption {
	public Deleted: boolean;

	public left: number;

	public Settings: any;

	public Status: any;

	public Text: string;

	public top: number;

	public Token: string;
}

export class FlowStream {
	public Description: string;

	public ID: string;

	public InputModuleID: string;

	public Name: string;

	public Order: number;

	public OutputModuleID: string;

	public Transform: string;
}

export enum DeviceAuthenticationMethod {
    SymmetricKey = 0,
    X509SelfSigned = 1,
    X509CASigned = 2
}

export enum ConnectionState {
    Connected = 0,
    Disconnected = 1
}

export enum DeviceStatus {
    Enabled = 0,
    Disabled = 1
}

export enum ModuleControlTypes {
	Direct = 0,
	Flow = 1,
    Gate = 2,
    Helper = 3
}

export enum FlowModuleShapeTypes {
    Rectangle = 0,
    Circle = 1,
    Ellipse = 2,
    Custom = 3
}

export class SchemaFunctionDefinition {
	public AllowedIncommingTypes: string[];

	public AllowDifferentIncommingTypes: boolean;

	public AllowMultipleIncomming: boolean;

	public Description: string;

	public FunctionType: string;

	public ID: string;

	public Lookup: string;

	public MaxProperties: number;

	public MinProperties: number;

	public Name: string;

	public ReturnType: string;
}

export class SchemaFunctionProperty {
	public FullPropertyName?: string;

	public Order: number;

	public Property: ForgeJSONSchema;

	public SchemaID?: string;

	public NodeID: string;

	public Source: string;

	public StaticValue?: any;

	public StaticValueType?: string;
}

export class SchemaFunction {
	public ID: string;

	public ExtraData: any;

	public Function: SchemaFunctionDefinition;

	public Name: string;

	public Order: number;

	public Properties: SchemaFunctionProperty[];

	public ReturnTrueSource: string;

	public ReturnTrueSourceID: string;

	public ReturnTrueValue: string;

	public ReturnFalseSource: string;

	public ReturnFalseSourceID: string;

	public ReturnFalseValue: string;

	public ReturnValueType: string;
}

export class SchemaFunctionRef {
	public ExtraData: any;

	public FunctionID: string;

	public ID: string;

	public Name: string;

	public Order: number;

	public Properties: any[];

	public ResultPropertyID: string;

	public ResultNodeID: string;

	public ReturnFalseSource: string;

	public ReturnFalseSourceID: string;

	public ReturnFalseValue: string;

	public ReturnTrueSource: string;

	public ReturnTrueSourceID: string;

	public ReturnTrueValue: string;

	public ReturnValueType: string;

	public Type: string;
}
