import { Category } from "./category";

export class Article {
       id: number;
       title: string;
       content_Main: string;
       content_Summary: string
       publish_Date: Date;
       picture: string;
       viewCount: number
       commentCount: number;
       category:Category //diğer modelden geldi
}
