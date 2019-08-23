import {
  Injectable,
  TemplateRef,
  Type,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  Renderer2,
  RendererFactory2
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
export type NgContent<T> = TemplateRef<T> | Type<T> | string;

@Injectable({
  providedIn: 'root'
})
export class FivOverlayService {
  private renderer: Renderer2;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    rendererFactory: RendererFactory2,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  morph<T>(component: Type<T>, content?: NgContent<T>): Observable<T> {
    const resolvedContent = this.resolveNgContent(content);
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector, resolvedContent);

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    domElem.style.opacity = '0';

    document.body.appendChild(domElem);
    const s = new Subject<T>();
    setTimeout(() => {
      s.next(componentRef.instance);
      domElem.style.opacity = '1';
    }, 0);
    return s.asObservable();
  }

  private resolveNgContent<T>(content: NgContent<T>) {
    if (!content) {
      return;
    }
    if (typeof content === 'string') {
      const element = this.renderer.createText(content);
      return [[element]];
    }
    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null);
      return [viewRef.rootNodes];
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      content
    );
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement]];
  }
}
