import { Post } from '../entity/post.entity';

export interface PostRepository {
  fetchPosts(type?: string): Promise<Post[]>;

  createPost(post: Post): Promise<Post>;
}
