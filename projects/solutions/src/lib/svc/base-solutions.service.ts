import { Observable } from 'rxjs';
import { BaseModeledResponse } from '@lcu/core';
import { Status } from '@lcu/common';
import { ISolutionsService, SolutionModuleSetup, ISolutionModule } from '@lcu/elements';

export abstract class BaseSolutionsService implements ISolutionsService {
	//	Fields
	protected localSolutionModules: SolutionModuleSetup[];

	//	Constructors
	constructor() {
		this.initSolutionModules();
	}

	//	API Methods
	public LoadSolutionModules(): Observable<BaseModeledResponse<SolutionModuleSetup[]>> {
		return new Observable(obs => {
			obs.next({
				Model: this.localSolutionModules,
				Status: <Status>{
					Code: 0,
					Message: 'Success'
				}
			});

			obs.complete();
		});
	}

	public ResolveSolutionModule(base: string, type: string): ISolutionModule {
		var solutionConfig: ISolutionModule = null;

		var moduleSetups = this.localSolutionModules.filter(dm => dm.BaseKey == base);

		if (moduleSetups.length > 0)
			moduleSetups.some(dms => {
				var moduleSetup = dms.Modules.find(m => m.Control.Type == type);

				if (moduleSetup) {
					solutionConfig = new moduleSetup.Solution();
				}

				return !!solutionConfig;
			});

		return solutionConfig;
	}

	//	Helpers
	protected abstract initSolutionModules();
}
