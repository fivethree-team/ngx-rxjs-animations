import { OnInit } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
export declare class FivOverlayContent implements OnInit {
    private sanitizer;
    readonly myStyle: SafeStyle;
    priority: number;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
}
