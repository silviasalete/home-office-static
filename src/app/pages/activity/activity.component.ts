import { ActivityResponseSave } from "./../../interfaces/activity-response-save";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivityResponse } from "src/app/interfaces/activity-response";
import { ActivitySaveRequest } from "src/app/interfaces/activity-request-save";
import { ActivityUpdateRequest } from "src/app/interfaces/activity-update-request";
import { Activity } from "src/app/models/activity";
import { ActivityService } from "src/app/services/activity.service";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
})
export class ActivityComponent implements OnInit {
  private requestSave: ActivitySaveRequest = {} as ActivitySaveRequest;
  private requestUpdate: ActivityUpdateRequest = {} as ActivityUpdateRequest;
  activities: Activity[] = [];
  form = this.formBuilder.group({
    id: this.formBuilder.control(null, null),
    title: this.formBuilder.control(null, Validators.required),
    description: this.formBuilder.control(null, Validators.required),
  });
  visibleForm: boolean = false;
  constructor(
    private service: ActivityService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.list();
  }
  list() {
    this.service.list().subscribe((activityResponse: ActivityResponse) => {
      this.activities = activityResponse.content;
    });
  }
  new() {
    this.visibleForm = true;
  }

  update(id: number) {
    this.edit(id);
    this.visibleForm = true;
  }
  saveOrUpdate() {
    if (this.form.get("id").value == null) {
      this.requestSave.title = this.form.get("title").value;
      this.requestSave.description = this.form.get("description").value;

      this.service
        .save(this.requestSave)
        .subscribe((response: ActivityResponseSave) => {
          this.list();
        });
    } else {
      this.requestUpdate.id = this.form.get("id").value;
      this.requestUpdate.title = this.form.get("title").value;
      this.requestUpdate.description = this.form.get("description").value;

      console.log("request update: ", this.requestUpdate);

      this.service.update(this.requestUpdate).subscribe((response) => {
        console.log("response update: ", response);

        this.list();
      });
    }
  }

  edit(id: number) {
    this.service.findById(id).subscribe((activity: ActivityResponseSave) => {
      this.form.controls["id"].setValue(activity.id);
      this.form.controls["title"].setValue(activity.title);
      this.form.controls["description"].setValue(activity.description);
    });
  }
  delete(id: number) {
    this.service.delete(id).subscribe((response) => {
      this.list();
    });
  }
}
