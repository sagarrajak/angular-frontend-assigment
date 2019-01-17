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
    path: 'q1',
    component: QuestionOneComponent,
  },
  {
    path: 'q2',
    component: QuestionTwoComponent,
  },
  {
    path: 'q3',
    component: QuestionThreeComponent,
  },
  {
    path: 'q4',
    component: QuestionFourComponent,
  },
  {
    path: 'q5',
    component: QuestionFiveComponent,
  },
  {
    path: 'q6',
    component: QuestionSixComponent,
  },
  {
    path: '**',
    redirectTo: 'q1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
