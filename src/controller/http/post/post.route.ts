import express from 'express';
import { PetHttpHandler } from './pet.handler';
import { container } from 'tsyringe';
import { PetDummyRepository } from '../../../infrastructure/persistence/pet/pet.dummy';
import { PetUseCase } from '../../../app/usecase/pet.usecase';

export default () => {
  const router = express.Router();

  container.register('PetUseCase', {
    useFactory: (c) => {
      c.register('PetRepository', { useClass: PetDummyRepository });
      return c.resolve(PetUseCase);
    },
  });
  const handler = container.resolve(PetHttpHandler);

  router.get('/pets', handler.fetchPets.bind(handler));
  return router;
};
