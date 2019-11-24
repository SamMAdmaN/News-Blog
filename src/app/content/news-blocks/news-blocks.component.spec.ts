import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlocksComponent } from './news-blocks.component';

describe('NewsBlocksComponent', () => {
  let component: NewsBlocksComponent;
  let fixture: ComponentFixture<NewsBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
