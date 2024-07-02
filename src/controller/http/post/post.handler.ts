import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'tsyringe';
import { PostUsecase } from '../../../app/usecase/post.usecase';
import { HttpResponseDto } from '../common/dto/http-response.dto';

@injectable()
export class PostHttpHandler {
  constructor(@inject('PostUseCase') private postUseCase: PostUsecase) {}

  public async fetchPosts(req: Request, res: Response, next: NextFunction) {
    const data = await this.postUseCase.getPosts();
    const mappedData = data.map((val) => val.toJSON());
    return res
      .status(200)
      .json(new HttpResponseDto({ data: mappedData }).toJSON());
  }
}
