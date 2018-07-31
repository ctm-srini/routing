import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent} from './department-list/department-list.component';
import { DepartmentDetailComponent} from './department-detail/department-detail.component';
import { EmployeeListComponent} from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full'},
  { path: 'departments', component: DepartmentListComponent},
  { path: 'departments/:id', component: DepartmentDetailComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]},
  { path: 'employees', component: EmployeeListComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'user', children:
      [
        { path: '', pathMatch: 'full', redirectTo: 'list' },
        {
          path: 'list', component: UserListComponent, children: [
            { path: 'detail/:name', component: UserComponent }
          ]
        },

      ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 // { path: '**', redirectTo: '/home', pathMatch: 'full' }

  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [DepartmentListComponent, 
  DepartmentDetailComponent,
  EmployeeListComponent, 
  PageNotFoundComponent,
  AboutComponent,
  HomeComponent,
  UserComponent,
  UserListComponent
]
