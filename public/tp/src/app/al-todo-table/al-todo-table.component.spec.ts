import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTodoTableComponent } from './al-todo-table.component';

describe('AlTodoTableComponent', () => {
  let component: AlTodoTableComponent;
  let fixture: ComponentFixture<AlTodoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTodoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTodoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
