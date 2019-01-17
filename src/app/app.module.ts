import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionFourComponent } from './question-four/question-four.component';
import { QuestionFiveComponent } from './question-five/question-five.component';
import { QuestionSixComponent } from './question-six/question-six.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    QuestionThreeComponent,
    QuestionFourComponent,
    QuestionFiveComponent,
    QuestionSixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
