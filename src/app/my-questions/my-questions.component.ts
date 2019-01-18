import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.scss']
})
export class MyQuestionsComponent  {

  constructor() { }
  public readonly question1: string = 'question-1';
  public readonly question2: string = 'question-2';
  public readonly question3: string = 'question-3';
  public readonly question4: string = 'question-4';
  public readonly question5: string = 'question-5';
  public readonly question6: string = 'question-6';
  public readonly question7: string = 'question-7';
}
