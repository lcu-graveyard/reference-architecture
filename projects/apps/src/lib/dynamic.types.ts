import { Type, InjectionToken } from '@angular/core';

export interface IDynamicComponent {
	EvaluateCustomCode: (exports: string) => void;
}

export class DynamicComponentConfiguration {
	public BypassCache: boolean;

	public Data: any;

	public Exports: string;

	public Host: { [key: string]: string };

	public Selector: string;

	public Services: { [key: string]: Type<any> | InjectionToken<any> };

	public Template: string;
}
