import { Especification } from '../model/Especification';
import {
  ICreateEspecificationDTO,
  IEspecificationsRepository,
} from './IEspecificationsRepository';

class EspecificationRepository implements IEspecificationsRepository {
  private especifications: Especification[];

  constructor() {
    this.especifications = [];
  }

  create({ name, description }: ICreateEspecificationDTO): void {
    const category = new Especification();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.especifications.push(category);
  }

  list(): Especification[] {
    return this.especifications;
  }

  findByName(name: string): Especification {
    const category = this.especifications.find(
      (category) => category.name === name
    );
    return category;
  }
}

export { EspecificationRepository };
