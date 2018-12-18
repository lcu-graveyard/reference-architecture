import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseModeledResponse } from '@lcu/core';
import { PageElement, RenderingControl } from './page.types';

export class DisplayModuleSetup {
	public Name: string;

	public Icon: string;

	public BaseKey: string;

	public Modules: DisplayModuleConfig[];
}

export class DisplayModuleSolutionConfig {
	public SolutionName: string;

	public SolutionBaseKey: string;
}

export class DisplayModuleConfig {
	public BuilderState: string;

	public Control: RenderingControl;

	public Display: Type<any>;

	public HideDrag: boolean;

	public Name: string;
}

export class ForgeRenderingDetails<TConfig> {
	public Class: string;

	public Configs: TConfig[];

	public Elements: PageElement[];

	public Hide: boolean;

	public Title: string;
}

export interface IComponentDisplayConfig {
	Display: IDisplayModule;

	Context: any;

	State: 'Builder' | 'Marketplace' | 'Render';
}

export class ComponentDisplayConfig implements IComponentDisplayConfig {
	public Display: IDisplayModule;

	public Context: any;

	public State: 'Builder' | 'Marketplace' | 'Render';
}

export interface IDisplayModule {
	BuilderState: string;

	Builder(): Type<any>;

	Marketplace(): Type<any>;

	Render(): Type<any>;
}

export abstract class BaseDisplayModule implements IDisplayModule {
	public BuilderState: string;

	public abstract Builder(): Type<any>;

	public abstract Marketplace(): Type<any>;

	public abstract Render(): Type<any>;
}

export abstract class IBuildersService {
	public abstract LoadDisplayModules(): Observable<BaseModeledResponse<DisplayModuleSetup[]>>;

	public abstract ResolveDisplayModule(base: string, type: string): IDisplayModule;
}

export interface IControlBuilder<TDetails extends ForgeRenderingDetails<TConfig>, TConfig> {
	Element: PageElement;

	Details: TDetails;
}

export interface IControlRender<TDetails extends ForgeRenderingDetails<TConfig>, TConfig> {
	Element: PageElement;

	Details: TDetails;
}

export interface IControlMarketplace<TDetails extends ForgeRenderingDetails<TConfig>, TConfig> {
	Element: PageElement;

	Details: TDetails;
}

export class SolutionModuleConfig {
	public Control: RenderingControl;

	public DisplaySetups: DisplayModuleSetup[];

	public Name: string;

	public Solution: Type<any>;
}

export class SolutionModuleSetup {
	public BaseKey: string;

	public Icon: string;

	public Modules: SolutionModuleConfig[];

	public Name: string;
}

export interface ISolutionModule {
	BuilderState: string;

	Documentation(): Type<any>;

	Heading(): Type<any>;

	Manage(): Type<any>;

	Marketplace(): Type<any>;

	Overview(): Type<any>;
}

export abstract class ISolutionsService {
	public abstract LoadSolutionModules(): Observable<BaseModeledResponse<SolutionModuleSetup[]>>;

	public abstract ResolveSolutionModule(base: string, type: string): ISolutionModule;
}

export class SolutionsSetup {
	public Configs: SolutionElement[];
}

export class SolutionElement {
	public Control: RenderingControl;

	public Title: string;
}
