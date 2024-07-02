import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'tsyringe';
import { PetUseCase } from '../../../app/usecase/pet.usecase';

@injectable()
export class PetHttpHandler {
  constructor(@inject('PetUseCase') private petUseCase: PetUseCase) {
    console.log(petUseCase);
  }

  public async fetchPets(req: Request, res: Response, next: NextFunction) {
    const data = await this.petUseCase.getPets();
    return res.status(200).json({ data });
  }
}
