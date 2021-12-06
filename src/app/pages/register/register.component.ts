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
import { CompanyService } from "src/app/services/company.service";
import { CompanyRequest, CompanyResponse } from "src/app/interfaces/company";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  private requestRegister: RegisterRequest = {} as RegisterRequest;
  private requestCompany: CompanyResponse = {} as CompanyResponse;
  private companySaved: CompanyResponse = {} as CompanyResponse;
  private sectorsSelected: Sector[];
  private arraySector: Sector[] = [];

  public isAdm: boolean = false;
  public sectors: Array<Sector> = [];

  form = this.formBuilder.group({
    name: this.formBuilder.control(null, Validators.required),
    email: this.formBuilder.control(null, Validators.required),
    password: this.formBuilder.control(null, Validators.required),
    company: this.formBuilder.control(null, Validators.required),
    sectorSelected: new FormArray([]),
  });

  constructor(
    private registerService: RegisterService,
    private companyService: CompanyService,
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
      // 1º Salvar Usuário
      this.requestRegister.name = this.form.get("name").value;
      this.requestRegister.email = this.form.get("email").value;
      this.requestRegister.password = this.form.get("password").value;
      this.sectorsSelected = this.form.get("sectorSelected").value;
      this.registerService
        .createAccount(this.requestRegister)
        .subscribe((responseRegister) => {});

      // 3º Associar Empresa aos setores
      this.sectorsSelected.map((s) => {
        this.sectorService.findById(s).subscribe((sector) => {
          this.arraySector.push(sector);
        });
      });
      // 2º Salvar Empresa
      this.requestCompany.name = this.form.get("company").value;
      this.requestCompany.sectors = this.arraySector;
      this.companyService
        .associateCompanyToSectors(this.requestCompany)
        .subscribe((responseCompany) => {
          this.companySaved = responseCompany;

          // this.companySaved.sectors = this.arraySector;
          // this.companyService
          //   .associateCompanyToSectors(this.companySaved)
          //   .subscribe((data) => {
          //     console.log("data associateCompanyToSectors: ", data);
          //   });
        });

      // this.router.navigate(["/login", responseRegister.email]);
      this.form.reset();
    }
  }
}
