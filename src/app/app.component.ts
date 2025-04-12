import { Component } from "@angular/core";
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "interview-master";

  constructor(private router: Router) {}

  // program navigation
  goToHome() {
    this.router.navigate(["/"]);
  }
}
