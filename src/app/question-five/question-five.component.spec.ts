import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFiveComponent } from './question-five.component';

describe('QuestionFiveComponent', () => {
  let component: QuestionFiveComponent;
  let fixture: ComponentFixture<QuestionFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
