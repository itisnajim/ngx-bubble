import { Component, ElementRef, Input, EventEmitter, OnInit, Output, Renderer2, AfterViewInit } from '@angular/core';
import interact from 'interactjs';
@Component({
  selector: 'ngx-bubble',
  templateUrl: './ngx-bubble.component.html',
  styles: [
    ':host { min-width: 16px; min-height: 16px; }'
  ]
})
export class NgxBubbleComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
  ) { }
  disableInnerClick = false;
  @Input() x = 0;
  @Input() y = 0;
  @Input() dragOptions?: any;
  @Output() bubbleMoveStart: EventEmitter<{x: number, y: number}> = new EventEmitter();
  @Output() bubbleMoving: EventEmitter<{x: number, y: number}> = new EventEmitter();
  @Output() bubbleMoveEnd: EventEmitter<{x: number, y: number}> = new EventEmitter();

  ngOnInit(): void {
    this.renderer.setAttribute(this.elRef.nativeElement, 'data-x', String(this.x));
    this.renderer.setAttribute(this.elRef.nativeElement, 'data-y', String(this.y));
    this.renderer.setStyle(this.elRef.nativeElement, 'transform', 'translateX(' + this.x + 'px) translateY(' + this.y + 'px)');
    this.renderer.setStyle(this.elRef.nativeElement, 'position', 'absolute');
    const defaultDragOptions = {
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      restrict: {
        restriction: 'parent',
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      // enable autoScroll
      autoScroll: false
    };
    this.dragOptions = this.dragOptions || {};
    const opts = {...defaultDragOptions, ...this.dragOptions};
    interact(this.elRef.nativeElement)
    .draggable(opts)
    .on('dragstart', (evt) => {
      this.bubbleMoveStart?.emit({x: this.x, y: this.y});
      this.disableInnerClick = true;
    })
    .on('dragmove', (event) => {
      // keep the dragged position in the data-x/data-y attributes
      this.x = Number(this.x || 0) + Number(event.delta.x),
      this.y = Number(this.y || 0) + Number(event.delta.y);
      // console.log('dragmove', event, this.x, this.y);
      this.renderer.setStyle(this.elRef.nativeElement, 'transform', 'translateX(' + this.x + 'px) translateY(' + this.y + 'px)');
      this.renderer.setAttribute(this.elRef.nativeElement, 'data-x', String(this.x));
      this.renderer.setAttribute(this.elRef.nativeElement, 'data-y', String(this.y));
      this.bubbleMoving?.emit({x: this.x, y: this.y});
    })
    .on('dragend', (evt) => {
      this.disableInnerClick = false;
      this.bubbleMoveEnd?.emit({x: this.x, y: this.y});
    });
  }

}
