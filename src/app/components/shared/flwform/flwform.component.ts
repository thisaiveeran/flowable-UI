import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {destroy, Model, render} from '@flowable/forms';

@Component({
  selector: 'flwform',
  template: '<div #el></div>'
})
export class FlwformComponent implements AfterViewInit, OnDestroy {
  @Input() props: Model.CommonFormProps|undefined;
  @Input() payload: Model.Payload = {};
  @Output() payloadChange = new EventEmitter<Model.Payload>();
  @ViewChild('el', {read: ElementRef}) el: ElementRef|undefined;

  constructor() {
  }

  ngAfterViewInit(): void {
    if (this.el && this.props) {
      render(this.el.nativeElement, {
        ...this.props,
        payload: this.payload,
        onChange: (p: Model.Payload) => {
          this.payload = p;
          this.payloadChange.emit(p);
        },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.el) {
      destroy(this.el.nativeElement);
    }
  }
}
