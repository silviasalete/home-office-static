import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { RegisterRequest } from "../../interfaces/register-request";
import { Router } from "@angular/router";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent {
  private request: RegisterRequest = {} as RegisterRequest;

  form = this.formBuilder.group({
    name: this.formBuilder.control(null, Validators.required),
    email: this.formBuilder.control(null, Validators.required),
    password: this.formBuilder.control(null, Validators.required),
  });

  constructor(
    private service: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.form.valid) {
      this.request = this.form.value;

      this.service.createAccount(this.request).subscribe((response) => {
        this.router.navigate(["/login", response.email]);
      });
      this.form.reset();
    }
  }
}
