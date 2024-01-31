import {  inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Post } from "../../core/models/Post.model";
import { PostService } from "../services/posts.service";
import { Observable } from "rxjs";


export  const postsResolver : ResolveFn<Post[]> = (
        route: ActivatedRouteSnapshot,
        state : RouterStateSnapshot,
        postService = inject(PostService)
        ) : Observable<Post[]> => {
            return postService.getPosts();
        }
