import { TemplateRef, EventEmitter } from '@angular/core';
import { FivOverlayContent } from './overlay-content/overlay-content.component';
import { FivOverlayService } from './overlay.service';
export declare class FivOverlay {
    private overlay;
    private componentRef;
    ngContent: TemplateRef<any>;
    priority: any;
    afterInit: EventEmitter<{}>;
    private _open;
    constructor(overlay: FivOverlayService);
    show(priority?: number, data?: any): FivOverlayContent;
    hide(): void;
    readonly open: boolean;
}
