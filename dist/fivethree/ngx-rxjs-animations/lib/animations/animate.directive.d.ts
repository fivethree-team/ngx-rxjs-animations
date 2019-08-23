import { OnDestroy, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
export declare class AnimateDirective implements OnInit, OnDestroy {
    private element;
    animIn: (target: ElementRef) => Observable<number>;
    animOut: (target: any) => Observable<number>;
    staggerIndex: number;
    staggerDelay: number;
    delay: number;
    private _parent;
    private _inserted;
    private _clone;
    private _index;
    private _staggerIndex;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
