import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBubbleComponent } from './ngx-bubble.component';

describe('NgxBubbleComponent', () => {
  let component: NgxBubbleComponent;
  let fixture: ComponentFixture<NgxBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
