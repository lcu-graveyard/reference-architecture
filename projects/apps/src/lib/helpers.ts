import { Component, NgModule } from "@angular/core";
import { JitCompilerFactory } from "@angular/platform-browser-dynamic";


export function createJitCompiler() {
	var jcf: any = JitCompilerFactory;

	return new jcf([{ useDebug: false, useJit: true }]).createCompiler();
}

export function appendMetaData(obj: any, metadata: any) {
	obj.annotations = [metadata];
}

export function isBrowserPlatform() {
	return window != null && window.document != null;
}

export function ForgeComponent(annotation: any) {
	return function (target: Function) {
		//var parentTarget = annotation.parent;
		let metaData = new Component(annotation);

		Component(metaData)(target);
	}
}

export function ForgeNgModule(annotation: any) {
	return function (target: Function) {
		//var parentTarget = annotation.parent;
		let metaData = new NgModule(annotation);

		NgModule(metaData)(target);
	}
}

export function scrollTo(elementOrPosition: any, offset: number = 0,
	step: number = 10, scrollContainer: string = 'body') {
	var position = offset;

	if (typeof(elementOrPosition) === 'string') {
		var elm = <HTMLElement>document.querySelector(elementOrPosition);

		position += elm ? getOffsetFromTop(elm) : parseFloat(elementOrPosition);
	} else if (typeof(elementOrPosition) === 'number') {
		position += elementOrPosition;
	}

	var scrollElm = <HTMLElement>document.querySelector(scrollContainer) || window;

	window.scrollTo({ left: 0, top: position, behavior: 'smooth' });
}

export function getOffsetFromTop(element: HTMLElement): number {
	if (!element)
		return 0;
	var working = element;

	var totalOffset = working.offsetTop;

	while (working.offsetParent) {
		working = <HTMLElement>working.offsetParent;

		totalOffset += working.offsetTop;
	}

	return totalOffset;
}
