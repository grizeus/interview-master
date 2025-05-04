import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatTabChangeEvent, MatTabsModule } from "@angular/material/tabs";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-top-menu",
  imports: [MatTabsModule, RouterModule],
  templateUrl: "./top-menu.component.html",
  styleUrl: "./top-menu.component.scss",
})
export class TopMenuComponent implements OnInit, OnDestroy {
  public tabIndex = 0;
  public tabs = ["Angular", "TypeScript", "JavaScript", "RxJS"];

  private destroy$ = new Subject<void>();

  constructor(public router: Router, private route: ActivatedRoute) {}

  changeTab(event: MatTabChangeEvent) {
    if (this.tabIndex === event.index) {
      return;
    }
    this.tabIndex = event.index;
    const tabName = event?.tab?.textLabel?.toLowerCase();

    this.router.navigate(["preparation"], {
      relativeTo: this.route,
      queryParams: { tabIndex: this.tabIndex, tabName },
    });
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((queryParams) => {
      if (queryParams['tabIndex'] && this.tabIndex !== Number(queryParams['tabIndex'])) {
        this.tabIndex = Number(queryParams['tabIndex']);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
