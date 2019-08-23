import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggerPage } from './stagger.page';

describe('StaggerPage', () => {
  let component: StaggerPage;
  let fixture: ComponentFixture<StaggerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaggerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaggerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
