import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Role, UserRequest } from "../../interfaces/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  private user: UserRequest = {} as UserRequest;

  registerForm = this.formBuilder.group({
    name: "",
    email: "",
    password: "",
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(): void {
    this.user = this.registerForm.value;

    this.userService.createAccount(this.user).subscribe((data) => {
      console.log("data", data);
      this.router.navigate(["/login", data.email]);
    });
    this.registerForm.reset();
  }
}
