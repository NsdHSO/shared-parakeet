import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameComponent } from './frame.component';
import { Router } from "@angular/router";
import { ChangeDetectorRef } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('FrameComponent', () => {
  let component: FrameComponent;
  let fixture: ComponentFixture<FrameComponent>;

  afterAll(() => {
    component.ngOnDestroy()
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FrameComponent, RouterTestingModule, BrowserAnimationsModule ],
      providers: [ {
        provider: Router,
        useValue: {}
      }, {
        provider: ChangeDetectorRef,
        useValue: {}
      } ]
    }).compileComponents();

    fixture = TestBed.createComponent(FrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open sidenav', () => {
    jest.spyOn(component.sidenav, 'open')
    component.openSidenav()
    expect(component.sidenav.open).toHaveBeenCalledTimes(1)
  });
  it('should close sidenav', () => {
    jest.spyOn(component.sidenav, 'close')
    component.closeSidenav()
    expect(component.sidenav.close).toHaveBeenCalledTimes(1)
  });
});
