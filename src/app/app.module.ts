
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { UrlformatPipe } from './pipes/urlformat.pipe';
import { CategoryArticlesComponent } from './category-articles/category-articles.component';
import { SearchComponent } from './search/search.component';
import { MenuArticleMostViewComponent } from './components/menu-article-most-view/menu-article-most-view.component';
import { MenuArchiveComponent } from './components/menu-archive/menu-archive.component';
import { ArchiveComponent } from './archive/archive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FooterNavComponent } from './nav/footer-nav/footer-nav.component';










@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    MainNavComponent,
    AdminNavComponent,
    MenuCategoryComponent,
    PageTitleComponent,
    ArticlesComponent,
    ArticleComponent,
    UrlformatPipe,
    CategoryArticlesComponent,
    SearchComponent,
    MenuArticleMostViewComponent,
    MenuArchiveComponent,
    ArchiveComponent,
    AdminHomeComponent,
    AdminArticleComponent,
    ArticleAddComponent,
    ArticleListComponent,
    ArticleUpdateComponent,
    FooterNavComponent,
   








  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule






  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
