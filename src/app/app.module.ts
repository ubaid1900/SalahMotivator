import { GoogleMapsModule } from '@angular/google-maps'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PhraseComponent } from './components/phrase/phrase.component';
import { ManagePhrasesComponent } from './components/manage-phrases/manage-phrases.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ManagePhraseComponent } from './components/manage-phrase/manage-phrase.component';
import { ManageTitleComponent } from './components/manage-title/manage-title.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ClockComponent } from './components/clock/clock.component';
import { TimerComponent } from './components/timer/timer.component';
import { TaskComponent } from './components/task/task.component';
import { CssTrialsComponent } from './components/css-trials/css-trials.component';
import { AlphabetCssComponent } from './components/alphabet-css/alphabet-css.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PhraseComponent,
    ManagePhrasesComponent,
    ConfirmationDialogComponent,
    ManagePhraseComponent,
    ManageTitleComponent,
    TasksComponent,
    AddTaskComponent,
    ClockComponent,
    TimerComponent,
    TaskComponent,
    CssTrialsComponent,
    AlphabetCssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule, GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddTaskComponent]
})
export class AppModule { }
