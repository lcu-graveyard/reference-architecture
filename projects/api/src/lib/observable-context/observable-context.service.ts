import { BehaviorSubject, Observable } from 'rxjs';

export abstract class ObservableContextService<T> {
  //	Fields
  protected subject: BehaviorSubject<T>;

  //	Properties
  public readonly Context: Observable<T>;

  //  Constructors
  constructor() {
    this.subject = new BehaviorSubject<T>(this.defaultValue());

	  this.Context = this.subject.asObservable();
  }

	//  Helpers
	protected defaultValue(): T {
		return null;
	}
}
