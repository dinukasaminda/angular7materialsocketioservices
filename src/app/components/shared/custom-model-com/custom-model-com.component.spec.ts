import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcmModalComponent } from './custom-model-com.component';

describe('NgcmModalComponent', () => {
  let component: NgcmModalComponent;
  let fixture: ComponentFixture<NgcmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgcmModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
