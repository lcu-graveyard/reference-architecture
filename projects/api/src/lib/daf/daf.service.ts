import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable, OperatorFunction, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injector } from '@angular/core';

export class DAFServiceSettings {
	public APIRoot?: string;
}

export abstract class DAFService {
	//	Fields
	protected http: Http;

	protected settings: DAFServiceSettings;

	//  Constructors
	constructor(protected injector: Injector) {
		this.http = injector.get(Http);

		try {
			this.settings = injector.get(DAFServiceSettings);
		} catch (err) {
			
		}
	}

	//  Helpers
	protected catchError(): OperatorFunction<any, any> {
		return catchError<any, any>(this.handleError);
	}

	protected extractData<TData>(res: Response) {
		let body = res.json();

		if (!body)
			return null;

		return body as TData;
	}

	protected delete<T>(path: string): Observable<T> {
		return this.http.delete(this.resolvePath(path)).pipe(
			this.map<T>(),
			this.catchError()
		);
	}

	protected get<T>(path: string): Observable<T> {
		return this.http.get(this.resolvePath(path)).pipe(
			this.map<T>(),
			this.catchError()
		);
	}

	protected handleError(error: any): any {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';

		console.error(errMsg); // log to console instead

		return throwError(errMsg);
	}

	protected map<TData>(): OperatorFunction<any, TData> {
		return map<any, TData>((res: Response) => this.extractData<TData>(res));
	}

	protected patch<T>(data: any, path: string): Observable<T> {
		var body = JSON.stringify(data);

		var headers = new Headers({ 'Content-Type': 'application/json' });

		var options = new RequestOptions({ headers: headers });

		return this.http.patch(this.resolvePath(path), body, options).pipe(
			this.map<T>(),
			this.catchError()
		);
	}

	protected post<T>(data: any, path: string): Observable<T> {
		var body = JSON.stringify(data);

		var headers = new Headers({ 'Content-Type': 'application/json' });

		var options = new RequestOptions({ headers: headers });

		return this.http.post(this.resolvePath(path), body, options).pipe(
			this.map<T>(),
			this.catchError()
		);
	}

	protected put<T>(data: any, path: string): Observable<T> {
		var body = JSON.stringify(data);

		var headers = new Headers({ 'Content-Type': 'application/json' });

		var options = new RequestOptions({ headers: headers });

		return this.http.put(this.resolvePath(path), body, options).pipe(
			this.map<T>(),
			this.catchError()
		);
	}

	protected resolvePath(path: string) {
		if (this.settings && this.settings.APIRoot)
			return `${this.settings.APIRoot}${path}`;
		else
			return path;
	}
}
