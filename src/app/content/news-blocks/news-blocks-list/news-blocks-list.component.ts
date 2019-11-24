import { Component, OnInit } from '@angular/core';
import { NewsBlock } from 'src/app/shared/models/news-blocks.model';

@Component({
  selector: 'app-news-blocks-list',
  templateUrl: './news-blocks-list.component.html',
  styleUrls: ['./news-blocks-list.component.scss']
})
export class NewsBlocksListComponent implements OnInit {
  newsblocks: NewsBlock[] = [];
  constructor() { }

  ngOnInit() {
    this.newsblocks = [
      new NewsBlock(
       'title1',
       'News desc 1 ',
       'https://penserra.com/wp-content/uploads/2018/03/dummy-post-square-1-300x300.jpg'

    ),
     new NewsBlock(
      'title2',
      'News Desc2',
      'https://penserra.com/wp-content/uploads/2018/03/dummy-post-square-1-300x300.jpg'

    ),
    new NewsBlock(
     'title3',
     'News Desc3',
     'https://penserra.com/wp-content/uploads/2018/03/dummy-post-square-1-300x300.jpg'

    ),
    new NewsBlock(
      'title4',
      'News Desc4',
      'https://penserra.com/wp-content/uploads/2018/03/dummy-post-square-1-300x300.jpg'

    ),
    new NewsBlock(
      'title4',
      'News Desc4',
      'https://penserra.com/wp-content/uploads/2018/03/dummy-post-square-1-300x300.jpg'
    )
   ]
  }

}
