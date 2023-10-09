import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMdComponent } from './hero-md.component';

describe('HeroMdComponent', () => {
  let component: HeroMdComponent;
  let fixture: ComponentFixture<HeroMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroMdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
