import express from 'express';
import { container } from 'tsyringe';
import { PostHttpHandler } from './post.handler';

export default () => {
  const router = express.Router();

  const handler = container.resolve(PostHttpHandler);

  router.get('/posts', handler.fetchPosts.bind(handler));
  router.post('/posts', handler.createPost.bind(handler));

  return router;
};
