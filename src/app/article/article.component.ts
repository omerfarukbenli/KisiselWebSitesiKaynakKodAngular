import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';
import { Category } from '../models/category';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

article:Article;
category:Category;





  constructor(public articleService:ArticleService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.articleService.loading = true;

      let id = Number( this.route.snapshot.paramMap.get("id"));
      this.articleService.getArticle(id).subscribe(data=>{
        this.article = data;
        this.category = data.category;

        this.articleService.ArticleVievCountUp(this.article.id).subscribe();
      });


    });
  }

}
