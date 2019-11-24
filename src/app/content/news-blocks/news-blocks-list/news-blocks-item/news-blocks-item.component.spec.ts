import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlocksItemComponent } from './news-blocks-item.component';

describe('NewsBlocksItemComponent', () => {
  let component: NewsBlocksItemComponent;
  let fixture: ComponentFixture<NewsBlocksItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBlocksItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlocksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
