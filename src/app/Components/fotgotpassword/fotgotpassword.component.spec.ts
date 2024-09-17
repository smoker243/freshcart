import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotgotpasswordComponent } from './fotgotpassword.component';

describe('FotgotpasswordComponent', () => {
  let component: FotgotpasswordComponent;
  let fixture: ComponentFixture<FotgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotgotpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FotgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
