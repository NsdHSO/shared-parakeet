import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import { FrameComponent } from "../frame.component";

@Component({
  selector: 'shared-frame-drawer',
  standalone: true,
  imports: [ CommonModule, RouterOutlet ],
  templateUrl: './frame-drawer.component.html',
  styleUrls: [ './frame-drawer.component.scss' ]
})
export class FrameDrawerComponent implements OnInit, OnDestroy {
  constructor (private readonly _frameComponent: FrameComponent){
  }

  ngOnInit (){
    if ( this._frameComponent && this._frameComponent.openSidenav ) {
      this._frameComponent.openSidenav();
    }
  }

  public ngOnDestroy (): void{
    this._frameComponent.closeSidenav()
  }

}
