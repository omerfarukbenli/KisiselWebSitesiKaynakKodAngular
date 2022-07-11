import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

  fileData:File=null;
  picture:string=null;
  articleForm:FormGroup;
  success:boolean;
  loading:boolean;
  info:string;
  categories:Category[];



  constructor(  private articleService:ArticleService, private categoryService:CategoryService) { }

  ngOnInit(): void {

this.getCategory();




this.articleForm = new FormGroup({
  title: new FormControl("makale 1", Validators.required),
      content_Summary: new FormControl("makale özet 1", Validators.required),
      content_Main: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      picture: new FormControl("")
});


  }




  onSubmit()
  {
    if(this.articleForm.valid)
    {
      this.loading=true;
      this.articleService.addArticle(this.articleForm.value).subscribe(data=>
        {
          this.success=true;
          console.log("eklendi");
        }, error=>{
          this.success=false;
          this.info="bir hata meydana geldi:" +error;
        });
    }
  }





displayCategoryName(category:any){
  return category.name;
}




//bu metot çalışmıyor
getCategory(){
  this.categoryService.getCategories().subscribe(result=>{
    this.categories = result;
  })
}







  upload(files:any){
this.fileData = files.target.files[0];

let formData = new FormData();

formData.append("picture", this.fileData)

this.articleService.saveArticlePicture(formData).subscribe(result=>{

  console.log(result.path);
  this.picture = result.path;

  this.articleForm.controls.picture.setValue(this.picture);


});
  }
}
