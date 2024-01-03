import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeFormControlComponent } from './user-type-form-control.component';

describe('UserTypeFormControlComponent', () => {
  let component: UserTypeFormControlComponent;
  let fixture: ComponentFixture<UserTypeFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTypeFormControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTypeFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
