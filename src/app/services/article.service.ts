import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Archive } from '../models/archive';
import { Article } from '../models/article';
import { ArticlePg } from '../models/article-pg';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient:HttpClient) {}

  public loading:boolean = true;
  private apiUrl:string = 'https://localhost:7145/api/Articles';



  getArticlesWithoutPg(){
    return this.httpClient.get<Article[]>(this.apiUrl);
  }

 getArticles(page:number, pageSize:number)
 {
let api = `${this.apiUrl}/${page}/${pageSize}`;

return this.httpClient.get<ArticlePg>(api).pipe(tap(x=>{

  this.loading=false;

}));
 }

getSearchArticles(searchText:string, page:number, pageSize:number)
{
  let api = `${this.apiUrl}/SearchArticles/${searchText}/${page}/${pageSize}`;
  return this.httpClient.get<ArticlePg>(api).pipe(
    tap(x=> {
      this.loading = false;
    })
  );
}



 getArticlesWithCategory(categoryId:number, page:number, pageSize:number)
{
  let api = `${this.apiUrl}/GetArticlesWithCategory/${categoryId}/${page}/${pageSize}`;
  return this.httpClient.get<ArticlePg>(api).pipe(
    tap(x=> {
      this.loading = false;
    })
  );
}




getArticle(id:number)
{
let api=`${this.apiUrl}/${id}`;
return this.httpClient.get<Article>(api).pipe(tap(x=>{

  this.loading=false;
}))
}

getArticlesByMostView(){


let api = `${this.apiUrl}/GetArticlesByMostView`;
return this.httpClient.get<Article[]>(api);

}


getArticlesArchive(){
  let api = `${this.apiUrl}/GetArticlesArchive`;
return this.httpClient.get<Archive[]>(api);
}


getArticleArchiveList(year:number, month:number, page:number, pageSize:number){

  let api = `${this.apiUrl}/GetArticleArchiveList/${year}/${month}/${page}/${pageSize}`;
  return this.httpClient.get<ArticlePg>(api).pipe(
    tap(x=> {
      this.loading = false;
    })
  );
}

ArticleVievCountUp(id:number){
let api = `${this.apiUrl}/ArticleVievCountUp/${id}`;
return this.httpClient.get(api);
}

saveArticlePicture(image:any){ //any
return this.httpClient.post<any>(`${this.apiUrl}/SaveArticlePicture`, image);
}


addArticle(article:Article){
  return this.httpClient.post(this.apiUrl, article);
}
}
