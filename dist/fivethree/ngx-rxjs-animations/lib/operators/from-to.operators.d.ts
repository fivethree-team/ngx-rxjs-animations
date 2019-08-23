import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { RectPosition, BoxModel } from '../types';
export declare const fromTo: (el: ElementRef<any>, style: string, from: number, to: number, m: (t: number) => string) => <T>(source: Observable<number>) => Observable<number>;
export declare const fromToPixels: (target: ElementRef<any>, from: number, to: number, style: string) => <T>(source: Observable<number>) => Observable<number>;
export declare const toPixels: (target: ElementRef<any>, to: number, style: string) => <T>(source: Observable<number>) => Observable<number>;
export declare const toBoxModel: (target: ElementRef<any>, toBox: number | BoxModel, style: string) => <T>(source: Observable<number>) => Observable<number>;
export declare const fromToBoxModel: (target: ElementRef<any>, fromBox: number | BoxModel, toBox: number | BoxModel, style: string) => <T>(source: Observable<number>) => Observable<number>;
export declare const toPadding: (target: ElementRef<any>, padding: number | BoxModel) => <T>(source: Observable<number>) => Observable<number>;
export declare const toMargin: (target: ElementRef<any>, margin: number | BoxModel) => <T>(source: Observable<number>) => Observable<number>;
export declare const fromToPosition: (target: ElementRef<any>, from: RectPosition, to: RectPosition) => <T>(source: Observable<number>) => Observable<number>;
export declare const toPosition: (target: ElementRef<any>, to: RectPosition) => <T>(source: Observable<number>) => Observable<number>;
export declare const toBoxShadow: (target: ElementRef<any>, boxShadow: string) => <T>(source: Observable<number>) => Observable<number>;
export declare const fromToColor: (target: ElementRef<any>, fromColor: string, style?: string) => <T>(source: Observable<number>) => Observable<number>;