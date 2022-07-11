import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';



import { ArchiveComponent } from './archive/archive.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { ArticleComponent } from './article/article.component';
import { CategoryArticlesComponent } from './category-articles/category-articles.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:"",
    component:MainLayoutComponent,
    children:[
      {
        path:"", component:HomeComponent
      },
      {
        path:"sayfa/:page",
        component:HomeComponent
      },
      {
      path:"makale/:title/:id", //seo
      component:ArticleComponent
      },
      {
        path:"kategori/:name/:id",
        component:CategoryArticlesComponent
        },
        {
          path:"kategori/:name/:id/sayfa/:page",
          component:CategoryArticlesComponent
          },
         {
          path: "arama/sayfa/:page",
          component: SearchComponent
         },
         {
            path:"arsiv/:year/:month",
            component:ArchiveComponent
         },
         {
          path: "arsiv/:year/:month/sayfa/:page",
          component: ArchiveComponent
         },

      {
        path:"hakkimda", component:AboutMeComponent
      },
      {
        path:"iletisim", component:ContactComponent
      },
    ]
  },
  {
    path:"admin",
    component:AdminLayoutComponent,
    children:[
      {
        path:"",
        component:AdminHomeComponent
      },
      {
        path:"anasayfa",
        component:AdminHomeComponent
    },
    {
      path:"makale",
      component:AdminArticleComponent,
      children:[

        {
          //..../admin/makale/liste
          path: "liste",
          component: ArticleListComponent
        },
        {
          //...../admin/makale/guncelle/2
          path: "guncelle/:id",
          component: ArticleUpdateComponent
        },
        {
          // ..... /admin/makale/ekle
          path: "ekle",
          component: ArticleAddComponent
        }

      ]
    }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
