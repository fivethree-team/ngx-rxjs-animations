/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, TemplateRef, ComponentFactoryResolver, ApplicationRef, Injector, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var FivOverlayService = /** @class */ (function () {
    function FivOverlayService(componentFactoryResolver, rendererFactory, appRef, injector) {
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
    FivOverlayService.prototype.morph = /**
     * @template T
     * @param {?} component
     * @param {?=} content
     * @return {?}
     */
    function (component, content) {
        /** @type {?} */
        var resolvedContent = this.resolveNgContent(content);
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector, resolvedContent);
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        domElem.style.opacity = '0';
        document.body.appendChild(domElem);
        /** @type {?} */
        var s = new Subject();
        setTimeout((/**
         * @return {?}
         */
        function () {
            s.next(componentRef.instance);
            domElem.style.opacity = '1';
        }), 0);
        return s.asObservable();
    };
    /**
     * @private
     * @template T
     * @param {?} content
     * @return {?}
     */
    FivOverlayService.prototype.resolveNgContent = /**
     * @private
     * @template T
     * @param {?} content
     * @return {?}
     */
    function (content) {
        if (!content) {
            return;
        }
        if (typeof content === 'string') {
            /** @type {?} */
            var element = this.renderer.createText(content);
            return [[element]];
        }
        if (content instanceof TemplateRef) {
            /** @type {?} */
            var viewRef = content.createEmbeddedView(null);
            return [viewRef.rootNodes];
        }
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(content);
        /** @type {?} */
        var componentRef = factory.create(this.injector);
        return [[componentRef.location.nativeElement]];
    };
    FivOverlayService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FivOverlayService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: RendererFactory2 },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    /** @nocollapse */ FivOverlayService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FivOverlayService_Factory() { return new FivOverlayService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR)); }, token: FivOverlayService, providedIn: "root" });
    return FivOverlayService;
}());
export { FivOverlayService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZpdmV0aHJlZS9uZ3gtcnhqcy1hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL292ZXJsYXkvb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFdBQVcsRUFFWCx3QkFBd0IsRUFDeEIsY0FBYyxFQUNkLFFBQVEsRUFHUixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHM0M7SUFNRSwyQkFDVSx3QkFBa0QsRUFDMUQsZUFBaUMsRUFDekIsTUFBc0IsRUFDdEIsUUFBa0I7UUFIbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUVsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7OztJQUVELGlDQUFLOzs7Ozs7SUFBTCxVQUFTLFNBQWtCLEVBQUUsT0FBc0I7O1lBQzNDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDOztZQUNoRCxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMvQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7YUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDO1FBRXpDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFeEMsT0FBTyxHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUM1RCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRTVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUM3QixDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUs7UUFDMUIsVUFBVTs7O1FBQUM7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDOUIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7OztJQUVPLDRDQUFnQjs7Ozs7O0lBQXhCLFVBQTRCLE9BQXFCO1FBQy9DLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTs7Z0JBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakQsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNwQjtRQUNELElBQUksT0FBTyxZQUFZLFdBQVcsRUFBRTs7Z0JBQzVCLE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7O1lBRUssT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDbkUsT0FBTyxDQUNSOztZQUNLLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEQsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQXRERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpDLHdCQUF3QjtnQkFLeEIsZ0JBQWdCO2dCQUpoQixjQUFjO2dCQUNkLFFBQVE7Ozs0QkFOVjtDQXFFQyxBQXZERCxJQXVEQztTQXBEWSxpQkFBaUI7Ozs7OztJQUM1QixxQ0FBNEI7Ozs7O0lBRzFCLHFEQUEwRDs7Ozs7SUFFMUQsbUNBQThCOzs7OztJQUM5QixxQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBBcHBsaWNhdGlvblJlZixcbiAgSW5qZWN0b3IsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IHR5cGUgTmdDb250ZW50PFQ+ID0gVGVtcGxhdGVSZWY8VD4gfCBUeXBlPFQ+IHwgc3RyaW5nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaXZPdmVybGF5U2VydmljZSB7XG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIG1vcnBoPFQ+KGNvbXBvbmVudDogVHlwZTxUPiwgY29udGVudD86IE5nQ29udGVudDxUPik6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IHJlc29sdmVkQ29udGVudCA9IHRoaXMucmVzb2x2ZU5nQ29udGVudChjb250ZW50KTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudClcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3RvciwgcmVzb2x2ZWRDb250ZW50KTtcblxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgIGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgICBkb21FbGVtLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuICAgIGNvbnN0IHMgPSBuZXcgU3ViamVjdDxUPigpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcy5uZXh0KGNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgICBkb21FbGVtLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIHMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVOZ0NvbnRlbnQ8VD4oY29udGVudDogTmdDb250ZW50PFQ+KSB7XG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoY29udGVudCk7XG4gICAgICByZXR1cm4gW1tlbGVtZW50XV07XG4gICAgfVxuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBjb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgIHJldHVybiBbdmlld1JlZi5yb290Tm9kZXNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIGNvbnRlbnRcbiAgICApO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgIHJldHVybiBbW2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XV07XG4gIH1cbn1cbiJdfQ==