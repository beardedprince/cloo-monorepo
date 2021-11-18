import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAccordionComponent } from './base-accordion.component';

describe('BaseAccordionComponent', () => {
  let component: BaseAccordionComponent;
  let fixture: ComponentFixture<BaseAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
