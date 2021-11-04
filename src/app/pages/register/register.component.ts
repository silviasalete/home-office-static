import { Sector } from "./../../models/sector.entities";
import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RegisterRequest } from "../../interfaces/register";
import { RegisterService } from "src/app/services/register.service";
import { SectorService } from "src/app/services/sector.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  private request: RegisterRequest = {} as RegisterRequest;
  public isAdm: boolean = false;
  public sectors: Array<Sector> = [];

  form = this.formBuilder.group({
    name: this.formBuilder.control(null, Validators.required),
    email: this.formBuilder.control(null, Validators.required),
    password: this.formBuilder.control(null, Validators.required),
    sectorSelected: new FormArray([]),
  });

  constructor(
    private registerService: RegisterService,
    private sectorService: SectorService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => (this.isAdm = params["admin"] ? true : false)
    );
    this.listSectors();
    console.log("this.form.value: ", this.form.value);
  }

  listSectors() {
    this.sectorService.all().subscribe((sectors) => {
      this.sectors = sectors;
    });
  }

  onCheckChange(event) {
    const formArray: FormArray = this.form.get("sectorSelected") as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      console.log("this.form.value: ", this.form.value);
      formArray.push(new FormControl(event.target.value));
    } else {
      /* unselected */
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }

        i++;
      });
      console.log("this.form.value: ", this.form.value);
    }
  }
  onSubmit(): void {
    if (this.form.valid) {
      console.log("this.form.value: ", this.form.value);

      this.request = this.form.value;

      this.registerService.createAccount(this.request).subscribe((response) => {
        this.router.navigate(["/login", response.email]);
      });
      this.form.reset();
    }
  }
}
