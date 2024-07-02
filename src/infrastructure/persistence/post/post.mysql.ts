import { Pet } from '../../../app/entity/pet.entity';
import { PetRepository } from '../../../app/repository/pet.repository';
import { injectable } from 'tsyringe';

@injectable()
export class PetMySqlRepository implements PetRepository {
  fetchPets(type?: string): Promise<Pet[]> {
    throw new Error('Method not implemented.');
  }
}
