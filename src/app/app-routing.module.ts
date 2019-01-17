import { MyQuestionsComponent } from './my-questions/my-questions.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionOneComponent} from './question-one/question-one.component';
import {QuestionTwoComponent} from './question-two/question-two.component';
import {QuestionThreeComponent} from './question-three/question-three.component';
import {QuestionFourComponent} from './question-four/question-four.component';
import {QuestionFiveComponent} from './question-five/question-five.component';
import {QuestionSixComponent} from './question-six/question-six.component';

const routes: Routes = [
  {
    path: 'questions',
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
    path: '**',
    redirectTo: 'questions',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
