import { ResumeComponent } from "./../../pages/resume/resume.component";
import { SupportComponent } from "./../../pages/support/support.component";
import { ChatComponent } from "./../../pages/chat/chat.component";
import { FileComponent } from "./../../pages/file/file.component";
import { TeamComponent } from "./../../pages/team/team.component";
import { TimeSheetComponent } from "./../../pages/time-sheet/time-sheet.component";
import { CalendarComponent } from "./../../pages/calendar/calendar.component";
import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { TaskComponent } from "../../pages/task/task.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "task", component: TaskComponent },
  { path: "time-sheet", component: TimeSheetComponent },
  { path: "team", component: TeamComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "file", component: FileComponent },
  { path: "resume", component: ResumeComponent },
  { path: "notification", component: Notification },
  { path: "chat", component: ChatComponent },
  { path: "support", component: SupportComponent },
];
