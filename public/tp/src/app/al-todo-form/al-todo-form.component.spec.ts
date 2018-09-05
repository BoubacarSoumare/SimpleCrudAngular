import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTodoFormComponent } from './al-todo-form.component';

describe('AlTodoFormComponent', () => {
  let component: AlTodoFormComponent;
  let fixture: ComponentFixture<AlTodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTodoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
