/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, TemplateRef, ComponentFactoryResolver, ApplicationRef, Injector, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class FivOverlayService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} rendererFactory
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, rendererFactory, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @template T
     * @param {?} component
     * @param {?=} content
     * @return {?}
     */
    morph(component, content) {
        /** @type {?} */
        const resolvedContent = this.resolveNgContent(content);
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector, resolvedContent);
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        domElem.style.opacity = '0';
        document.body.appendChild(domElem);
        /** @type {?} */
        const s = new Subject();
        setTimeout((/**
         * @return {?}
         */
        () => {
            s.next(componentRef.instance);
            domElem.style.opacity = '1';
        }), 0);
        return s.asObservable();
    }
    /**
     * @private
     * @template T
     * @param {?} content
     * @return {?}
     */
    resolveNgContent(content) {
        if (!content) {
            return;
        }
        if (typeof content === 'string') {
            /** @type {?} */
            const element = this.renderer.createText(content);
            return [[element]];
        }
        if (content instanceof TemplateRef) {
            /** @type {?} */
            const viewRef = content.createEmbeddedView(null);
            return [viewRef.rootNodes];
        }
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(content);
        /** @type {?} */
        const componentRef = factory.create(this.injector);
        return [[componentRef.location.nativeElement]];
    }
}
FivOverlayService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FivOverlayService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: RendererFactory2 },
    { type: ApplicationRef },
    { type: Injector }
];
/** @nocollapse */ FivOverlayService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FivOverlayService_Factory() { return new FivOverlayService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR)); }, token: FivOverlayService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FivOverlayService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FivOverlayService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FivOverlayService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    FivOverlayService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZpdmV0aHJlZS9uZ3gtcnhqcy1hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL292ZXJsYXkvb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFdBQVcsRUFFWCx3QkFBd0IsRUFDeEIsY0FBYyxFQUNkLFFBQVEsRUFHUixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7OztJQUc1QixZQUNVLHdCQUFrRCxFQUMxRCxlQUFpQyxFQUN6QixNQUFzQixFQUN0QixRQUFrQjtRQUhsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBRWxELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRUQsS0FBSyxDQUFJLFNBQWtCLEVBQUUsT0FBc0I7O2NBQzNDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDOztjQUNoRCxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMvQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7YUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDO1FBRXpDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Y0FFeEMsT0FBTyxHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUM1RCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRTVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztjQUM3QixDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUs7UUFDMUIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzlCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7Ozs7SUFFTyxnQkFBZ0IsQ0FBSSxPQUFxQjtRQUMvQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTztTQUNSO1FBQ0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7O2tCQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7O2tCQUM1QixPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUNoRCxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCOztjQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ25FLE9BQU8sQ0FDUjs7Y0FDSyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUF0REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWkMsd0JBQXdCO1lBS3hCLGdCQUFnQjtZQUpoQixjQUFjO1lBQ2QsUUFBUTs7Ozs7Ozs7SUFZUixxQ0FBNEI7Ozs7O0lBRzFCLHFEQUEwRDs7Ozs7SUFFMUQsbUNBQThCOzs7OztJQUM5QixxQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBBcHBsaWNhdGlvblJlZixcbiAgSW5qZWN0b3IsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IHR5cGUgTmdDb250ZW50PFQ+ID0gVGVtcGxhdGVSZWY8VD4gfCBUeXBlPFQ+IHwgc3RyaW5nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaXZPdmVybGF5U2VydmljZSB7XG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIG1vcnBoPFQ+KGNvbXBvbmVudDogVHlwZTxUPiwgY29udGVudD86IE5nQ29udGVudDxUPik6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IHJlc29sdmVkQ29udGVudCA9IHRoaXMucmVzb2x2ZU5nQ29udGVudChjb250ZW50KTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudClcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3RvciwgcmVzb2x2ZWRDb250ZW50KTtcblxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgIGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgICBkb21FbGVtLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuICAgIGNvbnN0IHMgPSBuZXcgU3ViamVjdDxUPigpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcy5uZXh0KGNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgICBkb21FbGVtLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIHMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVOZ0NvbnRlbnQ8VD4oY29udGVudDogTmdDb250ZW50PFQ+KSB7XG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoY29udGVudCk7XG4gICAgICByZXR1cm4gW1tlbGVtZW50XV07XG4gICAgfVxuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBjb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgIHJldHVybiBbdmlld1JlZi5yb290Tm9kZXNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIGNvbnRlbnRcbiAgICApO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgIHJldHVybiBbW2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XV07XG4gIH1cbn1cbiJdfQ==