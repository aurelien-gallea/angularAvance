import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../../core/models/Post.model";
import { environnement } from "../../../environnement/environnement.prod";

@Injectable()
export class PostService {
    constructor(private http: HttpClient){}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environnement.apiUrl}/posts`);
    }
}