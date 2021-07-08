import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendNavComponent } from './nav.component';

describe('BackendNavComponent', () => {
  let component: BackendNavComponent;
  let fixture: ComponentFixture<BackendNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
