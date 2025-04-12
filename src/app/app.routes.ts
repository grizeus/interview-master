import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AngularComponent } from "./components/angular/angular.component";
import { TypescriptComponent } from "./components/typescript/typescript.component";
import { JavascriptComponent } from "./components/javascript/javascript.component";
import { RxjsComponent } from "./components/rxjs/rxjs.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadComponent: () =>
      import("./components/home/home.component").then((c) => c.HomeComponent),
  },
  { path: "angular", component: AngularComponent },
  { path: "typescript", component: TypescriptComponent },
  { path: "javascript", component: JavascriptComponent },
  { path: "rxjs", component: RxjsComponent },
  { path: "**", component: PageNotFoundComponent },
];
