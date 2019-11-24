import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsBlocksComponent } from './news-blocks.component';
import { NewsBlocksListComponent } from './news-blocks-list/news-blocks-list.component';
import { NewsBlocksItemComponent } from './news-blocks-list/news-blocks-item/news-blocks-item.component'
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    NewsBlocksComponent,
    NewsBlocksListComponent,
    NewsBlocksItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    NewsBlocksComponent
  ]

})
export class NewsBlocksModule { }
