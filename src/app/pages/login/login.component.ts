import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm = this.formBuilder.group({
    username: this.formBuilder.control(null, Validators.required),
    password: this.formBuilder.control(null, Validators.required),
  });
  emailParam: string = "";
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => (this.emailParam = params["email"])
    );
    console.log("email: ", this.emailParam);
    this.loginForm.controls["username"].setValue(this.emailParam);
  }

  onSubmit(): void {
    const pusername = this.loginForm.get("username")?.value;
    const ppassword = this.loginForm.get("password")?.value;
    this.userService.postLogin(pusername, ppassword).subscribe((data) => {
      console.log("data", JSON.parse(JSON.stringify(data)));
    });
  }
}
