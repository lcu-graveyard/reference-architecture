import { Type, Input, OnInit, Injector } from "@angular/core";
import { ISolutionModule, SolutionElement } from '@lcu/elements';

export interface ISolutionDisplayConfig {
	Context: any;

	Solution: ISolutionModule;

	State: 'Documentation' | 'Heading' | 'Manage' | 'Marketplace' | 'Overview';
}

export class SolutionDisplayConfig implements ISolutionDisplayConfig {
	public Solution: ISolutionModule;

	public Context: any;

	public State: 'Documentation' | 'Heading' | 'Manage' | 'Marketplace' | 'Overview';
}

export abstract class BaseSolutionModule implements ISolutionModule {
	public BuilderState: string;

	public abstract Documentation(): Type<any>;

	public abstract Heading(): Type<any>;

	public abstract Manage(): Type<any>;

	public abstract Marketplace(): Type<any>;

	public abstract Overview(): Type<any>;
}

export interface ISolutionControl {
	Solution: SolutionElement;
}

export class ForgeGenericSolution implements ISolutionControl, OnInit {
	//	Fields

	//	Properties
	@Input('solution')
	public Solution: SolutionElement;

	@Input('state')
	public State: 'Documentation' | 'Heading' | 'Manage' | 'Marketplace' | 'Overview';

	//  Constructors
	constructor(injector: Injector) {
	}

	//	Life Cycle
	public ngOnInit() {
	}

	//	API Methods

	//	Helpers
}
