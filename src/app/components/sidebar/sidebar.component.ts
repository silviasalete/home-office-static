import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "ni-tv-2 text-primary",
    class: "",
  },
  {
    path: "/activity",
    title: "Tarefas",
    icon: "ni-bullet-list-67 text-red",
    class: "",
  },
  {
    path: "/time-sheet",
    title: "Ponto",
    icon: "ni-time-alarm text-green",
    class: "",
  },
  { path: "/team", title: "Equipe", icon: "ni-atom text-blue", class: "" },
  {
    path: "/calendar",
    title: "Agenda",
    icon: "ni-calendar-grid-58 text-pink",
    class: "",
  },
  {
    path: "/file",
    title: "Arquivos",
    icon: "ni-archive-2 text-brown",
    class: "",
  },
  {
    path: "/resume",
    title: "Currículo",
    icon: "ni-trophy text-yellow",
    class: "",
  },
  {
    path: "/notification",
    title: "Notificações",
    icon: "ni-bell-55 text-red",
    class: "",
  },
  {
    path: "/chat",
    title: "Chat Privado",
    icon: "ni-chat-round text-blue",
    class: "",
  },
  {
    path: "/support",
    title: "Suporte",
    icon: "ni-support-16 text-gray",
    class: "",
  },
  // { path: "/maps", title: "Maps", icon: "ni-pin-3 text-orange", class: "" },
  // { path: "/login", title: "Login", icon: "ni-key-25 text-info", class: "" },
  // {
  //   path: "/register",
  //   title: "Register",
  //   icon: "ni-circle-08 text-pink",
  //   class: "",
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
