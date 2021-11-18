import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClooperCommonComponent } from './clooper-common.component';

describe('ClooperCommonComponent', () => {
  let component: ClooperCommonComponent;
  let fixture: ComponentFixture<ClooperCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClooperCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClooperCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
