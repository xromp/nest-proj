import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDriverModalComponent } from './create-driver-modal.component';

describe('CreateDriverModalComponent', () => {
  let component: CreateDriverModalComponent;
  let fixture: ComponentFixture<CreateDriverModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDriverModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDriverModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
