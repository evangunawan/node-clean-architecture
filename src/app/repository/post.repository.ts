import { Pet } from '../entity/pet.entity';

export interface PetRepository {
  fetchPets(type?: string): Promise<Pet[]>;
}
