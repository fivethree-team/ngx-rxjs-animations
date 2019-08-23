import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
export declare const stagger: (targets: ElementRef<any>[], animation: (target: ElementRef<any>) => Observable<any>, d: number) => Observable<any>;
