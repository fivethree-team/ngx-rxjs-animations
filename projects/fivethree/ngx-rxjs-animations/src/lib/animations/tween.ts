import { Observable } from 'rxjs';

export function tween(
  easingFunction: Function,
  duration: number
): Observable<number> {
  return new Observable(observer => {
    let startTime;
    let id = requestAnimationFrame(function sample(time) {
      startTime = startTime || time;
      const t = time - startTime;
      if (t < duration) {
        observer.next(easingFunction(t, 0, 1, duration));
        id = requestAnimationFrame(sample);
      } else {
        observer.next(easingFunction(duration, 0, 1, duration));
        id = requestAnimationFrame(() => {
          observer.complete();
        });
      }
    });
    return function() {
      if (id) {
        cancelAnimationFrame(id);
      }
    };
  });
}
