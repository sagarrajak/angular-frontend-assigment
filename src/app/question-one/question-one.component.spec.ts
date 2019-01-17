import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOneComponent } from './question-one.component';

describe('QuestionOneComponent', () => {
  let component: QuestionOneComponent;
  let fixture: ComponentFixture<QuestionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
