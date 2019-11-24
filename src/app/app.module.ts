import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";


import { NewsBlocksModule } from './content/news-blocks/news-blocks.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NewsBlocksComponent } from './content/news-blocks/news-blocks.component';
import { NewsBlocksListComponent } from './content/news-blocks/news-blocks-list/news-blocks-list.component';
import { NewsBlocksItemComponent } from './content/news-blocks/news-blocks-list/news-blocks-item/news-blocks-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    NewsBlocksModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
