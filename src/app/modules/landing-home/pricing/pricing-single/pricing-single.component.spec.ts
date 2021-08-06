import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingSingleComponent } from './pricing-single.component';


describe('PricingSingleComponent', () => {
  let component: PricingSingleComponent;
  let fixture: ComponentFixture<PricingSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
