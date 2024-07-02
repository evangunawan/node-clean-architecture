import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'tsyringe';
import { PostUsecase } from '../../../app/usecase/post.usecase';

@injectable()
export class PostHttpHandler {
  constructor(@inject('PostUseCase') private postUseCase: PostUsecase) {
    console.log(postUseCase);
  }

  public async fetchPosts(req: Request, res: Response, next: NextFunction) {
    const data = await this.postUseCase.getPosts();
    return res.status(200).json({ data });
  }
}
