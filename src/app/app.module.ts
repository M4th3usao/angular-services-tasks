import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TimerComponent } from './components/timer/timer.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ListComponent } from './components/list/list.component';
import { TasksService } from './services/tasks.service';
import { TimerService } from './services/timer.service';
import { ListService } from './services/list.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'list', component: ListComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TimerComponent,
    TasksComponent,
    ListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TasksService, TimerService, ListService],
})
export class AppModule {}
