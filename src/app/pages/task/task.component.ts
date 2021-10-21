import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/interfaces/task";
import { TaskService } from "src/app/services/task.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.taskList();
  }

  taskList() {
    this.taskService.list().subscribe((data) => {
      this.tasks = data.content;
    });
  }

  editTask(id: number) {
    // this.router.navigate([`/task-update/${id}`]);
    this.router.navigate(["/task-update", id]);
  }

  deleteTask(id: number) {
    console.log("deleteTask:", id);
    this.taskService.deleteTask(id).subscribe((data) => {
      this.taskList();
    });
  }
}
