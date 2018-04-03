import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAccountsComponent } from './welcome-accounts.component';

describe('WelcomeAccountsComponent', () => {
  let component: WelcomeAccountsComponent;
  let fixture: ComponentFixture<WelcomeAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
