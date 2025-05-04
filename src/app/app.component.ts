import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";

import { TopMenuComponent } from "./components/top-menu/top-menu.component";
import { LeftSideMenuComponent } from "./components/left-side-menu/left-side-menu.component";
import { CategoryComponent } from "./components/category/category.component";
import { DeleteConfirmationModalComponent } from "./components/delete-confirmation-modal/delete-confirmation-modal.component";
import { GenerateAnswerModalComponent } from "./components/generate-answer-modal/generate-answer-modal.component";
import { PreparationComponent } from "./components/preparation/preparation.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { UserPanelComponent } from "./components/user-panel/user-panel.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    CategoryComponent,
    DeleteConfirmationModalComponent,
    GenerateAnswerModalComponent,
    LeftSideMenuComponent,
    PreparationComponent,
    TopMenuComponent,
    PageNotFoundComponent,
    UserPanelComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "interview-master";
}
