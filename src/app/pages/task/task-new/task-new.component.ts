import { TaskService } from "./../../../services/task.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { Task } from "src/app/interfaces/task";

@Component({
  selector: "app-task-new",
  templateUrl: "./task-new.component.html",
  styleUrls: ["./task-new.component.scss"],
})
export class TaskNewComponent implements OnInit {
  formSave = this.formBuilder.group({
    title: this.formBuilder.control(null, Validators.required),
    description: this.formBuilder.control(null, Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log("Requisição", this.formSave.value);
    const task: Task = this.formSave.value;
    this.taskService.save(task).subscribe((data) => {
      console.log("Resposta", data);
    });
  }
}
