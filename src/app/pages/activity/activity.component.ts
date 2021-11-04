import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import {
  ActivityPageable,
  ActivityWithId,
  ActivityForm,
} from "src/app/interfaces/activity";
import { Activity } from "src/app/models/activity.entities";
import { ActivityService } from "src/app/services/activity.service";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
})
export class ActivityComponent implements OnInit {
  private requestSave: ActivityForm = {} as ActivityForm;
  private requestUpdate: ActivityWithId = {} as ActivityWithId;
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

  new() {
    this.visibleForm = true;
  }

  update(id: number) {
    this.findById(id);
    this.visibleForm = true;
  }

  list() {
    this.service.list().subscribe((activityResponse: ActivityPageable) => {
      this.activities = activityResponse.content;
    });
  }

  saveOrUpdate() {
    if (this.form.get("id").value == null) {
      this.requestSave.title = this.form.get("title").value;
      this.requestSave.description = this.form.get("description").value;

      this.service.save(this.requestSave).subscribe(() => this.list());
    } else {
      this.requestUpdate.id = this.form.get("id").value;
      this.requestUpdate.title = this.form.get("title").value;
      this.requestUpdate.description = this.form.get("description").value;

      this.service.update(this.requestUpdate).subscribe(() => this.list());
    }
  }

  findById(id: number) {
    this.service.findById(id).subscribe((activity: ActivityWithId) => {
      this.form.controls["id"].setValue(activity.id);
      this.form.controls["title"].setValue(activity.title);
      this.form.controls["description"].setValue(activity.description);
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => this.list());
  }
}
