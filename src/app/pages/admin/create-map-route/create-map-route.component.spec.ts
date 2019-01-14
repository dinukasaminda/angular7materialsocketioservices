import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMapRouteComponent } from './create-map-route.component';

describe('CreateMapRouteComponent', () => {
  let component: CreateMapRouteComponent;
  let fixture: ComponentFixture<CreateMapRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMapRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMapRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
