/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { FivOverlayService } from './overlay.service';
export class FivOverlay {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
        this.afterInit = new EventEmitter();
        this._open = false;
    }
    /**
     * @param {?=} priority
     * @param {?=} data
     * @return {?}
     */
    show(priority, data) {
        if (!this.componentRef) {
            // this.componentRef = this.overlay.createOverlay(
            //   FivOverlayContent,
            //   this.ngContent
            // );
            this._open = true;
            this.componentRef.instance.priority = priority;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.afterInit.emit(data);
            }), 0);
            return this.componentRef.instance;
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
            this._open = false;
        }
    }
    /**
     * @return {?}
     */
    get open() {
        return this._open;
    }
}
FivOverlay.decorators = [
    { type: Component, args: [{
                selector: 'fiv-overlay',
                template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [""]
            }] }
];
/** @nocollapse */
FivOverlay.ctorParameters = () => [
    { type: FivOverlayService }
];
FivOverlay.propDecorators = {
    ngContent: [{ type: ViewChild, args: ['content', { static: false },] }],
    priority: [{ type: Input }],
    afterInit: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FivOverlay.prototype.componentRef;
    /** @type {?} */
    FivOverlay.prototype.ngContent;
    /** @type {?} */
    FivOverlay.prototype.priority;
    /** @type {?} */
    FivOverlay.prototype.afterInit;
    /**
     * @type {?}
     * @private
     */
    FivOverlay.prototype._open;
    /**
     * @type {?}
     * @private
     */
    FivOverlay.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL25neC1yeGpzLWFuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT3RELE1BQU0sT0FBTyxVQUFVOzs7O0lBUXJCLFlBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBSHBDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLFVBQUssR0FBRyxLQUFLLENBQUM7SUFFMkIsQ0FBQzs7Ozs7O0lBRWxELElBQUksQ0FBQyxRQUFpQixFQUFFLElBQVU7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsa0RBQWtEO1lBQ2xELHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsS0FBSztZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDL0MsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztZQUVOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwrRUFBdUM7O2FBRXhDOzs7O1lBTlEsaUJBQWlCOzs7d0JBVXZCLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3VCQUN0QyxLQUFLO3dCQUNMLE1BQU07Ozs7Ozs7SUFKUCxrQ0FBc0Q7O0lBRXRELCtCQUFxRTs7SUFDckUsOEJBQWtCOztJQUNsQiwrQkFBeUM7Ozs7O0lBQ3pDLDJCQUFzQjs7Ozs7SUFFViw2QkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgQ29tcG9uZW50UmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRml2T3ZlcmxheUNvbnRlbnQgfSBmcm9tICcuL292ZXJsYXktY29udGVudC9vdmVybGF5LWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEZpdk92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi9vdmVybGF5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXYtb3ZlcmxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3ZlcmxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpdk92ZXJsYXkge1xuICBwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEZpdk92ZXJsYXlDb250ZW50PjtcblxuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG5nQ29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgcHJpb3JpdHk7XG4gIEBPdXRwdXQoKSBhZnRlckluaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgX29wZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IEZpdk92ZXJsYXlTZXJ2aWNlKSB7fVxuXG4gIHNob3cocHJpb3JpdHk/OiBudW1iZXIsIGRhdGE/OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50UmVmKSB7XG4gICAgICAvLyB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGVPdmVybGF5KFxuICAgICAgLy8gICBGaXZPdmVybGF5Q29udGVudCxcbiAgICAgIC8vICAgdGhpcy5uZ0NvbnRlbnRcbiAgICAgIC8vICk7XG4gICAgICB0aGlzLl9vcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZnRlckluaXQuZW1pdChkYXRhKTtcbiAgICAgIH0sIDApO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcbiAgICAgIHRoaXMuX29wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQgb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgfVxufVxuIl19