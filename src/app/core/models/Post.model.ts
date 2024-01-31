import { Comment } from "./Comment.model";
export class Post {
  id!: number;
  userId!: number;
  title!: string;
  createdDate!: string;
  content!: string;
  imageUrl!: string;
  comments!: Comment[];
}
