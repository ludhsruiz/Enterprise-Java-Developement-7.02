import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavComponent } from './components/nav/nav.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { Article1Component } from './components/article1/article1.component';
import { Article2Component } from './components/article2/article2.component';
import { Article3Component } from './components/article3/article3.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    NavComponent,
    FeaturedPostComponent,
    Article1Component,
    Article2Component,
    Article3Component,
    PaginationComponent,
    FooterComponent,
    FooterComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }