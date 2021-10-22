import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Token } from "src/app/interfaces/token";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  token: Token;
  public loginForm = this.formBuilder.group({
    username: this.formBuilder.control(null, Validators.required),
    password: this.formBuilder.control(null, Validators.required),
  });
  emailParam: string = "";
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => (this.emailParam = params["email"])
    );
    this.loginForm.controls["username"].setValue(this.emailParam);
  }

  onSubmit() {
    const pUsername = this.loginForm.get("username")?.value;
    const pPassword = this.loginForm.get("password")?.value;

    try {
      this.userService.login(pUsername, pPassword).subscribe((data) => {
        this.token = data;
        window.localStorage.setItem("token", this.token.token);
        this.router.navigate([""]);
      });
    } catch (error) {
      console.log("error em login: ", error);
    }
  }
}
