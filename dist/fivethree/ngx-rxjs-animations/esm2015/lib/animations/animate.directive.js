/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import { of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';
import { before } from '../operators/util.operators';
export class AnimateDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.staggerDelay = 0;
        this.delay = 0;
        this._staggerIndex = 0;
        this.element.nativeElement.style.opacity = 0;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    set staggerIndex(i) {
        this._index = [
            ...this.element.nativeElement.parentElement.children
        ].indexOf(this.element.nativeElement);
        this._staggerIndex = i;
    }
    /**
     * @return {?}
     */
    get staggerIndex() {
        return this._staggerIndex;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.animIn) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._clone = this.element.nativeElement;
            this._parent = this.element.nativeElement.parentElement;
            this._index = [
                ...this.element.nativeElement.parentElement.children
            ].indexOf(this.element.nativeElement);
            of(true)
                .pipe(delay(this.staggerDelay * this.staggerIndex + this.delay), flatMap((/**
             * @return {?}
             */
            () => this.animIn(this.element))), before((/**
             * @return {?}
             */
            () => (this.element.nativeElement.style.opacity = ''))))
                .subscribe();
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // TODO Why though?
        if (this.element.nativeElement.parentElement) {
            // outer parent go destroyed
            return;
        }
        if (!this.animOut) {
            // no animation specified
            return;
        }
        this._inserted = this._parent.insertBefore(this._clone, this._parent.children[this._index]);
        this.element.nativeElement = this._inserted;
        of(true)
            .pipe(delay(this.staggerDelay * (this.staggerIndex + 1)), flatMap((/**
         * @return {?}
         */
        () => this.animOut(this.element))))
            .subscribe({
            complete: (/**
             * @return {?}
             */
            () => {
                this._parent.removeChild(this._inserted);
            })
        });
    }
}
AnimateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[anim]'
            },] }
];
/** @nocollapse */
AnimateDirective.ctorParameters = () => [
    { type: ElementRef }
];
AnimateDirective.propDecorators = {
    animIn: [{ type: Input, args: ['anim.in',] }],
    animOut: [{ type: Input, args: ['anim.out',] }],
    staggerIndex: [{ type: Input, args: ['anim.stagger',] }],
    staggerDelay: [{ type: Input, args: ['anim.stagger.delay',] }],
    delay: [{ type: Input, args: ['anim.delay',] }]
};
if (false) {
    /** @type {?} */
    AnimateDirective.prototype.animIn;
    /** @type {?} */
    AnimateDirective.prototype.animOut;
    /** @type {?} */
    AnimateDirective.prototype.staggerDelay;
    /** @type {?} */
    AnimateDirective.prototype.delay;
    /**
     * @type {?}
     * @private
     */
    AnimateDirective.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    AnimateDirective.prototype._inserted;
    /**
     * @type {?}
     * @private
     */
    AnimateDirective.prototype._clone;
    /**
     * @type {?}
     * @private
     */
    AnimateDirective.prototype._index;
    /**
     * @type {?}
     * @private
     */
    AnimateDirective.prototype._staggerIndex;
    /**
     * @type {?}
     * @private
     */
    AnimateDirective.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL25neC1yeGpzLWFuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvYW5pbWF0aW9ucy9hbmltYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLckQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQXFCM0IsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVRWLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFNdkIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFHeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFwQkQsSUFBMkIsWUFBWSxDQUFDLENBQVM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVE7U0FDckQsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFhRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHO2dCQUNaLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVE7YUFDckQsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUV0QyxFQUFFLENBQUMsSUFBSSxDQUFDO2lCQUNMLElBQUksQ0FDSCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDekQsT0FBTzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDeEMsTUFBTTs7O1lBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQzlEO2lCQUNBLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsbUJBQW1CO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFO1lBQzVDLDRCQUE0QjtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQix5QkFBeUI7WUFDekIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FDeEMsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ25DLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUM7YUFDTCxJQUFJLENBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ2xELE9BQU87OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQzFDO2FBQ0EsU0FBUyxDQUFDO1lBQ1QsUUFBUTs7O1lBQUUsR0FBRyxFQUFFO2dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUE7U0FDRixDQUFDLENBQUM7SUFDUCxDQUFDOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2FBQ25COzs7O1lBUHFDLFVBQVU7OztxQkFTN0MsS0FBSyxTQUFDLFNBQVM7c0JBQ2YsS0FBSyxTQUFDLFVBQVU7MkJBQ2hCLEtBQUssU0FBQyxjQUFjOzJCQVNwQixLQUFLLFNBQUMsb0JBQW9CO29CQUMxQixLQUFLLFNBQUMsWUFBWTs7OztJQVpuQixrQ0FBcUU7O0lBQ3JFLG1DQUFnRTs7SUFVaEUsd0NBQThDOztJQUM5QyxpQ0FBK0I7Ozs7O0lBRS9CLG1DQUE2Qjs7Ozs7SUFDN0IscUNBQStCOzs7OztJQUMvQixrQ0FBNEI7Ozs7O0lBQzVCLGtDQUF1Qjs7Ozs7SUFDdkIseUNBQTBCOzs7OztJQUVkLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25EZXN0cm95LCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIGZsYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBiZWZvcmUgfSBmcm9tICcuLi9vcGVyYXRvcnMvdXRpbC5vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW5pbV0nXG59KVxuZXhwb3J0IGNsYXNzIEFuaW1hdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgnYW5pbS5pbicpIGFuaW1JbjogKHRhcmdldDogRWxlbWVudFJlZikgPT4gT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBASW5wdXQoJ2FuaW0ub3V0JykgYW5pbU91dDogKHRhcmdldDogYW55KSA9PiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIEBJbnB1dCgnYW5pbS5zdGFnZ2VyJykgc2V0IHN0YWdnZXJJbmRleChpOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbmRleCA9IFtcbiAgICAgIC4uLnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5cbiAgICBdLmluZGV4T2YodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX3N0YWdnZXJJbmRleCA9IGk7XG4gIH1cbiAgZ2V0IHN0YWdnZXJJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhZ2dlckluZGV4O1xuICB9XG4gIEBJbnB1dCgnYW5pbS5zdGFnZ2VyLmRlbGF5Jykgc3RhZ2dlckRlbGF5ID0gMDtcbiAgQElucHV0KCdhbmltLmRlbGF5JykgZGVsYXkgPSAwO1xuXG4gIHByaXZhdGUgX3BhcmVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2luc2VydGVkOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfY2xvbmU6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9pbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9zdGFnZ2VySW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbmltSW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9jbG9uZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIHRoaXMuX2luZGV4ID0gW1xuICAgICAgICAuLi50aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuXG4gICAgICBdLmluZGV4T2YodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICBvZih0cnVlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWxheSh0aGlzLnN0YWdnZXJEZWxheSAqIHRoaXMuc3RhZ2dlckluZGV4ICsgdGhpcy5kZWxheSksXG4gICAgICAgICAgZmxhdE1hcCgoKSA9PiB0aGlzLmFuaW1Jbih0aGlzLmVsZW1lbnQpKSxcbiAgICAgICAgICBiZWZvcmUoKCkgPT4gKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnJykpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gVE9ETyBXaHkgdGhvdWdoP1xuICAgIGlmICh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAvLyBvdXRlciBwYXJlbnQgZ28gZGVzdHJveWVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmFuaW1PdXQpIHtcbiAgICAgIC8vIG5vIGFuaW1hdGlvbiBzcGVjaWZpZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pbnNlcnRlZCA9IHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoXG4gICAgICB0aGlzLl9jbG9uZSxcbiAgICAgIHRoaXMuX3BhcmVudC5jaGlsZHJlblt0aGlzLl9pbmRleF1cbiAgICApO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50ID0gdGhpcy5faW5zZXJ0ZWQ7XG4gICAgb2YodHJ1ZSlcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWxheSh0aGlzLnN0YWdnZXJEZWxheSAqICh0aGlzLnN0YWdnZXJJbmRleCArIDEpKSxcbiAgICAgICAgZmxhdE1hcCgoKSA9PiB0aGlzLmFuaW1PdXQodGhpcy5lbGVtZW50KSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9pbnNlcnRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iXX0=