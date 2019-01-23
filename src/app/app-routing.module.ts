import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFiveComponent } from './question-five/question-five.component';
import { QuestionFourComponent } from './question-four/question-four.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionSevenComponent } from './question-seven/question-seven.component';
import { QuestionSixComponent } from './question-six/question-six.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';

const routes: Routes = [{
    path: 'question',
    component: MyQuestionsComponent
  },
  {
    path: 'question-1',
    component: QuestionOneComponent,
  },
  {
    path: 'question-2',
    component: QuestionTwoComponent,
  },
  {
    path: 'question-3',
    component: QuestionThreeComponent,
  },
  {
    path: 'question-4',
    component: QuestionFourComponent,
  },
  {
    path: 'question-5',
    component: QuestionFiveComponent,
  },
  {
    path: 'question-6',
    component: QuestionSixComponent,
  },
  {
    path: 'question-7',
    component: QuestionSevenComponent,
  },
  {
    path: '**',
    redirectTo: 'question',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
