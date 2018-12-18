import { Pipe, PipeTransform } from '@angular/core';
//import { format, ParsedNumber, NumberFormat } from 'libphonenumber-js';

@Pipe({
	name: 'phone'
})
export class PhonePipe implements PipeTransform {
	transform(value: any, numFormat?: any): any {
		if (!value) {
			return value;
		}
		return this.format(value, numFormat || 'International');
	}

	format(value: any, numFormat?: any) {

	}
}