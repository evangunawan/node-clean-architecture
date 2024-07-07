import { inject, injectable } from 'tsyringe';
import { CommonUseCase } from '../common/usecase';
import { PostRepository } from '../../repository/post.repository';
import { PostCreateDto, PostResultDto } from '../../dto/post.dto';
import { Post } from '../../entity/post.entity';

@injectable()
export class CreatePostUseCase extends CommonUseCase<Promise<PostResultDto>> {
  constructor(
    @inject('PostRepository') private postRepository: PostRepository,
  ) {
    super();
  }

  public async execute(postDto: PostCreateDto): Promise<PostResultDto> {
    const data = await this.postRepository.createPost(
      new Post(postDto.type, postDto.content),
    );
    return new PostResultDto(data);
  }
}
