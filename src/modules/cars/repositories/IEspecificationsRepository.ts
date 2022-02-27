import { Especification } from '../model/Especification';

interface ICreateEspecificationDTO {
  name: string;
  description: string;
}

interface IEspecificationsRepository {
  create({ name, description }: ICreateEspecificationDTO): void;
  list(): Especification[];
  findByName(name: string): Especification;
}

export { IEspecificationsRepository, ICreateEspecificationDTO };
