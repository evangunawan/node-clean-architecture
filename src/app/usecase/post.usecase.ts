import { inject, injectable } from 'tsyringe';
import { PetRepository } from '../repository/pet.repository';
import { Pet } from '../entity/pet.entity';

@injectable()
export class PetUseCase {
  constructor(@inject('PetRepository') private petRepository: PetRepository) {}

  public async getPets(): Promise<Pet[]> {
    return this.petRepository.fetchPets();
  }
}
