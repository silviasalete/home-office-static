import { TaskForm } from "./../../../interfaces/task";
import { TaskService } from "./../../../services/task.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { Task } from "src/app/interfaces/task";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-new",
  templateUrl: "./task-new.component.html",
  styleUrls: ["./task-new.component.scss"],
})
export class TaskNewComponent implements OnInit {
  formSave = this.formBuilder.group({
    id: this.formBuilder.control(null, null),
    title: this.formBuilder.control(null, Validators.required),
    description: this.formBuilder.control(null, Validators.required),
  });
  myParam: string;
  task: Task;
  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => (this.myParam = params["id"])
    );
    if (this.myParam != undefined) {
      this.taskService.findById(this.myParam).subscribe((data) => {
        this.formSave.controls["id"].setValue(data.id);
        this.formSave.controls["title"].setValue(data.title);
        this.formSave.controls["description"].setValue(data.description);
      });
    }
  }

  onSubmit() {
    const task: Task = this.formSave.value;

    if (task.id == null) {
      const taskForm: TaskForm = {
        title: task.title,
        description: task.description,
      };
      this.taskService.save(taskForm).subscribe((data) => {});
    } else {
      this.taskService.update(task).subscribe((data) => {});
    }

    this.router.navigate(["/task"]);
  }
}
