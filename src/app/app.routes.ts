import type { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./app.component").then((m) => m.AppComponent),
    children: [
      {
        path: "",
        redirectTo: "contacts",
        pathMatch: "full",
      },
      {
        path: "contacts",
        loadComponent: () =>
          import("../app/common/components/contacts/contacts.component").then(
            (m) => m.ContactsComponent,
          ),
      },
    ],
  },
];
