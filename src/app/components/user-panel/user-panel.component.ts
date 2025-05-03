import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { Observable, of } from "rxjs";
import { SignInModalComponent } from "../sign-in-modal/sign-in-modal.component";
import { SignUpModalComponent } from "../sign-up-modal/sign-up-modal.component";

@Component({
  selector: "app-user-panel",
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: "./user-panel.component.html",
  styleUrl: "./user-panel.component.scss",
})
export class UserPanelComponent {
  user$: Observable<{ firstName: string; lastName: string }> = of();

  constructor(private dialog: MatDialog) {}

  signOut(): void {
    // TODO: Implement sign out logic
  }

  openSignInModal(): void {
    const dialogRef = this.dialog.open(SignInModalComponent, {
      width: "400px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // TODO: Implement service
      }
    });
  }

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignUpModalComponent, {
      width: "400px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // TODO: Implement service
      }
    });
  }
}
