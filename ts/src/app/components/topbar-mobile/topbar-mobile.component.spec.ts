import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarMobileComponent } from './topbar-mobile.component';

describe('TopbarMobileComponent', () => {
  let component: TopbarMobileComponent;
  let fixture: ComponentFixture<TopbarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
