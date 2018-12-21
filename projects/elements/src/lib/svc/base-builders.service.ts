import { Status } from '@lcu/common';
import { IDisplayModule, IBuildersService, SolutionModuleConfig, ISolutionsService, DisplayModuleSetup, SolutionsSetup } from '../display.types';
import { Observable } from 'rxjs';
import { BaseModeledResponse, isResultSuccess } from '@lcu/core';

export abstract class BaseBuildersService implements IBuildersService {
	//	Fields
	protected slnConfigs: SolutionModuleConfig[];

	//	Constructors
	constructor(protected solutionsSvc: ISolutionsService) {
		this.slnConfigs = [];
	}

	//	API Methods
	public LoadDisplayModules(): Observable<BaseModeledResponse<DisplayModuleSetup[]>> {
		return new Observable(obs => {
			var setups = this.loadDisplayModules();

			obs.next({
				Model: setups,
				Status: <Status>{
					Code: 0,
					Message: 'Success'
				}
			});

			obs.complete();
		});
	}

	public ResolveDisplayModule(base: string, type: string): IDisplayModule {
		var setups = this.loadDisplayModules();

		var displayConfig: IDisplayModule = null;

		var displayModuleSetups = setups.filter(dm => dm.BaseKey == base);

		if (displayModuleSetups.length > 0)
			displayModuleSetups.some(dms => {
				var moduleSetup = dms.Modules.find(m => m.Control.Type == type);

				if (moduleSetup) {
					displayConfig = new moduleSetup.Display();

					displayConfig.BuilderState = moduleSetup.BuilderState;
				}

				return !!displayConfig;
			});

		return displayConfig;
	}

	//	Helpers
	protected abstract loadCoreDisplayModules(): DisplayModuleSetup[];

	protected ensureDisplayModules(displaySetup: DisplayModuleSetup, displayModules: DisplayModuleSetup[]): void {
		var existingSetup = displayModules.find(dm => displaySetup.BaseKey == dm.BaseKey);

		if (existingSetup) {
			displaySetup.Modules.forEach(
				(moduleConfig) => {
					var existingConfig = existingSetup.Modules.find(es => {
						return es.Control.Base == moduleConfig.Control.Base && es.Control.Type == moduleConfig.Control.Type;
					});

					if (existingConfig) {
						var exIndex = existingSetup.Modules.indexOf(existingConfig);

						existingSetup.Modules.splice(exIndex, 1, moduleConfig);
					} else {
						existingSetup.Modules.push(moduleConfig);
					}
				});
		} else {
			displayModules.push(displaySetup);
		}
	}

	protected ensureSolutionDisplayModules(slnConfig: SolutionModuleConfig, displayModules: DisplayModuleSetup[]): void {
		if (slnConfig && slnConfig.DisplaySetups)
			slnConfig.DisplaySetups.forEach(
				(displaySetup) => {
					this.ensureDisplayModules(displaySetup, displayModules);
				});
	}

	protected loadDisplayModules(): DisplayModuleSetup[] {
		var coreDisplayModules = this.loadCoreDisplayModules();

		var displayModules = [];

		coreDisplayModules.forEach(displaySetup => {
			this.ensureDisplayModules(displaySetup, displayModules);
		});

		if (this.slnConfigs && this.slnConfigs.length > 0) {
			this.slnConfigs.forEach(slnConfig => {
				this.ensureSolutionDisplayModules(slnConfig, displayModules);
			});
		}

		return displayModules;
	}

	protected processSolutionSetup(setup: SolutionsSetup) {
		if (setup) {
			this.solutionsSvc.LoadSolutionModules().subscribe(
				(result) => {
					if (isResultSuccess(result)) {
						var slnModules = result.Model;

						var solutionSets = setup.Configs.map(c => {
							return slnModules.map(sm => {
								return sm.Modules.find(m => m.Control.Base == c.Control.Base && m.Control.Type == c.Control.Type);
							});
						});

						this.slnConfigs = solutionSets && solutionSets.length > 0 ? solutionSets.reduce((prev, cur) => {
							return [...prev, ...cur];
						}) : [];
					}
				}).unsubscribe();
		}
	}/*  */
}
