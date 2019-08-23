import { TemplateRef, Type, ComponentFactoryResolver, ApplicationRef, Injector, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
export declare type NgContent<T> = TemplateRef<T> | Type<T> | string;
export declare class FivOverlayService {
    private componentFactoryResolver;
    private appRef;
    private injector;
    private renderer;
    constructor(componentFactoryResolver: ComponentFactoryResolver, rendererFactory: RendererFactory2, appRef: ApplicationRef, injector: Injector);
    morph<T>(component: Type<T>, content?: NgContent<T>): Observable<T>;
    private resolveNgContent;
}
