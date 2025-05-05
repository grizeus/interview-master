import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";

import { TopMenuComponent } from "./components/top-menu/top-menu.component";
import { LeftSideMenuComponent } from "./components/left-side-menu/left-side-menu.component";
import { UserPanelComponent } from "./components/user-panel/user-panel.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    LeftSideMenuComponent,
    TopMenuComponent,
    UserPanelComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
}
