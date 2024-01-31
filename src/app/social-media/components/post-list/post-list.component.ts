import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../../../core/models/Post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
 
})
export class PostListComponent {

  postsList$! : Observable<Post[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.postsList$ = this.route.data.pipe(
      map(data =>data['posts'])
    );
  }

  onNewPostCommented(event: {comment: string, postId: number }) {
    console.log(event);
    
    }
    
}
