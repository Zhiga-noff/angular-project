import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {
  @Input() appDelay: number

  constructor(
    // TemplateRef - это то на что мы в данный момент
    // навесели структурную дерективу
    private template: TemplateRef<any>,
    // ViewContainerRef - обертка которая
    // создается вокруг нашей дерективы
    private view: ViewContainerRef
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template)
    }, this.appDelay * 1000)

  }

}
