import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl:string = 'https://localhost:7145/api/Categories';

  constructor(private httpClient:HttpClient) { }
  public getCategories()
  {
return this.httpClient.get<Category[]>(this.apiUrl); //ben burayı değiştireceğim
  }

  public getCategorybyId(id:number)
  {
let url = `${this.apiUrl}/${id}`;
return this.httpClient.get<Category>(url); //ben burayı değiştireceğim


//bunu list response mu koyacağız
  }
}
