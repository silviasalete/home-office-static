import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { LoginRequest } from "src/app/interfaces/login-request";
import { Token } from "src/app/models/token";
import { LoginService } from "src/app/services/login.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  private request: LoginRequest = {} as LoginRequest;
  public form = this.formBuilder.group({
    username: this.formBuilder.control(null, Validators.required),
    password: this.formBuilder.control(null, Validators.required),
  });
  constructor(
    private service: LoginService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) =>
      this.form.controls["username"].setValue(params["email"])
    );
  }

  onSubmit() {
    this.request.email = this.form.get("username")?.value;
    this.request.password = this.form.get("password")?.value;
    this.service.login(this.request).subscribe((token: Token) => {
      window.localStorage.setItem("token", token.token);
      this.router.navigate([""]);
    });
  }
}
