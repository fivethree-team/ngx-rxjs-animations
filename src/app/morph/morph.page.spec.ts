import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphPage } from './morph.page';

describe('MorphPage', () => {
  let component: MorphPage;
  let fixture: ComponentFixture<MorphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorphPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
