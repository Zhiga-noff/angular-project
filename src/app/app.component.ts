import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { DinamycComponent } from './dinamyc/dinamyc.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular';

  constructor(
    private viewContainer: ViewContainerRef,
    private componentFactoryResolved: ComponentFactoryResolver,
  ) {}

  ngOnInit() {
    setTimeout(() => {
      const componentFactory =
        this.componentFactoryResolved.resolveComponentFactory(DinamycComponent);
      const componentRef = this.viewContainer.createComponent(componentFactory);
    }, 5000);
  }
}
