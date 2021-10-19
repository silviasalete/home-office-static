import { Routes } from "@angular/router";
import { WelcomeComponent } from "src/app/pages/welcome/welcome.component";

import { LoginComponent } from "../../pages/login/login.component";
import { RegisterComponent } from "../../pages/register/register.component";

export const AuthLayoutRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "login/:email", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "welcome", component: WelcomeComponent },
];
