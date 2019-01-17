import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFourComponent } from './question-four.component';

describe('QuestionFourComponent', () => {
  let component: QuestionFourComponent;
  let fixture: ComponentFixture<QuestionFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
