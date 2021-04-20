import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBugsComponent } from './search-bugs.component';

describe('SearchBugsComponent', () => {
  let component: SearchBugsComponent;
  let fixture: ComponentFixture<SearchBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
