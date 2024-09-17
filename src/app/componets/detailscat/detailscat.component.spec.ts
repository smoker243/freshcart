import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscatComponent } from './detailscat.component';

describe('DetailscatComponent', () => {
  let component: DetailscatComponent;
  let fixture: ComponentFixture<DetailscatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailscatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
