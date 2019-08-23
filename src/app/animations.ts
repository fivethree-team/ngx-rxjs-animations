import { ElementRef } from '@angular/core';

import { zip, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

import { fadeIn, easeOutSine, slideInUp } from '@fivethree/ngx-rxjs-animations';

export const reveal = (element: ElementRef) =>
  zip(fadeIn(element, easeOutSine, 250), slideInUp(element, easeOutSine, 250));

export const showButton = (element: ElementRef) =>
  of(true).pipe(
    flatMap(() =>
      zip(
        fadeIn(element, easeOutSine, 250),
        slideInUp(element, easeOutSine, 250)
      )
    )
  );
