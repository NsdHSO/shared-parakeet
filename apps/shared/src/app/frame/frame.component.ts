import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { NgIf } from "@angular/common";
import { filter, merge, of, Subject } from "rxjs";

@Component({
  selector: 'shared-frame',
  standalone: true,
  imports: [ RouterOutlet, MatSidenavModule, NgIf ],
  templateUrl: './frame.component.html',
  styleUrls: [ './frame.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameComponent implements OnDestroy {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor (
    private readonly _router: Router,
    private readonly _changeDetection: ChangeDetectorRef){
  }

  goToRoute<T extends Array<string>> (route: T): void{
    this._router.navigate([ { outlets: { sidenav: [ ...route ] } } ]);
  }

  public openSidenav (): void{
    this.sidenav?.open()
    this._changeDetection.markForCheck()
  }

  public closeSidenav (): void{
    this.sidenav?.close();
    this._changeDetection.markForCheck();
  }

  ngOnDestroy (): void{
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
