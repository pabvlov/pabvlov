import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienchuchasoyComponent } from './quienchuchasoy.component';

describe('QuienchuchasoyComponent', () => {
  let component: QuienchuchasoyComponent;
  let fixture: ComponentFixture<QuienchuchasoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienchuchasoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienchuchasoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
