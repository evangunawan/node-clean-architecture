import { Pet } from '../../../app/entity/pet.entity';
import { PetRepository } from '../../../app/repository/pet.repository';

export class PetDummyRepository implements PetRepository {
  public async fetchPets(type?: string): Promise<Pet[]> {
    return new Promise((resolve) => {
      return resolve([
        new Pet('1', 'dog', 'Bonny'),
        new Pet('2', 'cat', 'Cookie'),
        new Pet('3', 'dog', 'Arthur'),
      ]);
    });
  }
}
