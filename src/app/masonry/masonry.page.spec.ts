import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryPage } from './masonry.page';

describe('MasonryPage', () => {
  let component: MasonryPage;
  let fixture: ComponentFixture<MasonryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
