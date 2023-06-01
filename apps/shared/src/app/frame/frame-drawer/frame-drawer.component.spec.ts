import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameDrawerComponent } from './frame-drawer.component';
import { FrameComponent } from "../frame.component";
import { CommonModule } from "@angular/common";

describe('FrameDrawerComponent', () => {
  let component: FrameDrawerComponent;
  let fixture: ComponentFixture<FrameDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule ],
      providers: [
        FrameComponent
      ]
    });

    fixture = TestBed.createComponent(FrameDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterAll(() => {
    component.ngOnDestroy()
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open sidenav', () => {

  })
});
