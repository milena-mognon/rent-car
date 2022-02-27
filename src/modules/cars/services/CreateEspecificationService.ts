import { ICategoryRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateEspecificationService {
  constructor(private especificationRepository: ICategoryRepository) {}

  public execute({ name, description }: IRequest): void {
    const especificationAlreadyExist =
      this.especificationRepository.findByName(name);

    if (especificationAlreadyExist) {
      throw new Error('Especification Already Exist');
    }

    this.especificationRepository.create({ name, description });
  }
}

export { CreateEspecificationService };
