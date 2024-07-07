import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';
import { HttpResponseDto } from '../common/dto/http-response.dto';
import { FetchPostUsecase } from '../../../app/usecase/post/fetch-post.usecase';
import { PostMockRepository } from '../../../infrastructure/persistence/post/post.mock';
import { CreatePostUseCase } from '../../../app/usecase/post/create-post.usecase';
import { PostCreateDto } from '../../../app/dto/post.dto';

@injectable()
export class PostHttpHandler {
  constructor() {}

  public async fetchPosts(req: Request, res: Response) {
    const ct = container.createChildContainer();
    ct.register('PostRepository', { useClass: PostMockRepository });
    const fetchPostUseCase = ct.resolve(FetchPostUsecase);

    const data = await fetchPostUseCase.execute();
    const mappedData = data.map((val) => val.toJSON());
    return res
      .status(200)
      .json(new HttpResponseDto({ data: mappedData }).toJSON());
  }

  public async createPost(req: Request, res: Response) {
    const ct = container.createChildContainer();
    ct.register('PostRepository', { useClass: PostMockRepository });
    const createPostUseCase = ct.resolve(CreatePostUseCase);

    const result = await createPostUseCase.execute(
      new PostCreateDto('text', req.body?.content || 'Hello World!'),
    );

    return res
      .status(201)
      .json(new HttpResponseDto({ data: result.toJSON() }).toJSON());
  }
}
