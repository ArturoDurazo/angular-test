import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinkieComponent } from './twinkie.component';

describe('TwinkieComponent', () => {
  let component: TwinkieComponent;
  let fixture: ComponentFixture<TwinkieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwinkieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwinkieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
