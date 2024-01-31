import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../core/models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss'
})
export class PostListItemComponent {

  @Input() post!: Post;
  @Output() postCommented = new EventEmitter<{ comment: string, postId: number}>();

  onNewComment(comment : string) {
    this.postCommented.emit({comment, postId: this.post.id })
    
  }
}
