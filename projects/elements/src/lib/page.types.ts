import { Type, ModuleWithProviders } from '@angular/core';

export class PagesSetup {
	public Configs: PageConfig[];
}

export class PageConfig {
	public Lookup: string;

	public Name: string;
}

export class ForgeThemeConfiguration {
	public Details: any;

	public Style: string;
}

export class PageSettings {
	public Theme: ForgeThemeConfiguration;
}

export class PointersConfig {
	public Pointers: { [lookup: string]: PageElement };
}

export class PageElement {
	public ApplicationID: string;

	public BuilderState: 'Builder' | 'Marketplace' | 'Render';

	public Control: RenderingControl;

	public ID: string;

	public PageLookup: string;

	public Order: number;

	public PageSave: boolean;

	public Pointer: string;

	public Rendering: RenderingDetails;

	public Title: string;
}

export class RenderingControl {
	public Base: string;

	public Details: any;

	public Type: string;
}

export class RenderingDetails {
	public Code: string;

	public CodeServices: string[];

	public Content: string;

	public DataMap: any; //DataMapperConfig;

	public Lookup: string;

	public RepeaterDataSet: string;

	public Style: string;
}

export class PageCompilerOptions {
	public Modules: Type<any>[] | ModuleWithProviders[] | any[];
}

export class InsightsConfig {
	public Action: string;

	public Category: string;

	public Label: string;

	public On: 'click';

	public Properties: any = {};

	public Value: string;
}
