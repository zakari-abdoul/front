import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillerComponent } from './detailler.component';

describe('DetaillerComponent', () => {
  let component: DetaillerComponent;
  let fixture: ComponentFixture<DetaillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
