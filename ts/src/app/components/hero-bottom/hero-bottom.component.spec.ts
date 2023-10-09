import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBottomComponent } from './hero-bottom.component';

describe('HeroBottomComponent', () => {
  let component: HeroBottomComponent;
  let fixture: ComponentFixture<HeroBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
