import express from 'express';
import { container } from 'tsyringe';
import { PostUsecase } from '../../../app/usecase/post.usecase';
import { PostMockRepository } from '../../../infrastructure/persistence/post/post.mock';
import { PostHttpHandler } from './post.handler';

export default () => {
  const router = express.Router();

  // todo: need refactor in this dependency registration. How do we handle a lot of them?
  container.register('PostUseCase', {
    useFactory: (c) => {
      c.register('PostRepository', { useClass: PostMockRepository });
      return c.resolve(PostUsecase);
    },
  });
  const handler = container.resolve(PostHttpHandler);

  router.get('/posts', handler.fetchPosts.bind(handler));
  return router;
};
