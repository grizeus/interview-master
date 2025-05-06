import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { combineLatest, map, Observable, of } from "rxjs";
import { SignInModalComponent } from "../sign-in-modal/sign-in-modal.component";
import { SignUpModalComponent } from "../sign-up-modal/sign-up-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { StorageService } from "../../services/storage.service";
import { jwtDecode } from "jwt-decode";

@Component({
  selector: "app-user-panel",
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: "./user-panel.component.html",
  styleUrl: "./user-panel.component.scss",
})
export class UserPanelComponent implements OnInit {
  user$: Observable<{ email: string; firstName: string } | null>;

  constructor(
    private dialog: MatDialog,
    private storageService: StorageService
  ) {
    this.user$ = combineLatest([
      this.storageService.getTokenObservable(),
      this.storageService.getFirstNameObservable(),
    ]).pipe(
      map(([token, firstName]) => {
        if (token) {
          const parsedToken = jwtDecode(token) as any;
          return {
            email: parsedToken?.email,
            firstName: firstName as string,
          };
        } else {
          return null;
        }
      })
    );
  }

  ngOnInit(): void {}

  signOut(): void {
    this.storageService.removeToken();
    this.storageService.removeFirstName();
  }

  openSignInModal(): void {
    const dialogRef = this.dialog.open(SignInModalComponent, {
      width: "400px",
    });
  }

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignUpModalComponent, {
      width: "400px",
    });
  }
}
