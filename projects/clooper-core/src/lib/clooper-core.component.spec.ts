import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClooperCoreComponent } from './clooper-core.component';

describe('ClooperCoreComponent', () => {
  let component: ClooperCoreComponent;
  let fixture: ComponentFixture<ClooperCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClooperCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClooperCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
