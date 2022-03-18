import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { SubjectComponent } from './screens/subject/subject.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "mon-hoc",
        component: SubjectComponent
      },
      {
        path: 'quiz/:code',
        component: QuizComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
