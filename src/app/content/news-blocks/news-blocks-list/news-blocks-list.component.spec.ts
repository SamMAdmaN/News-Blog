import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlocksListComponent } from './news-blocks-list.component';

describe('NewsBlocksListComponent', () => {
  let component: NewsBlocksListComponent;
  let fixture: ComponentFixture<NewsBlocksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBlocksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlocksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
