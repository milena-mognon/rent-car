import { CategoriesRepository } from '../repositories/CategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: CategoriesRepository) {}

  public execute({ name, description }: IRequest): void {
    const categoryAlreadyExist = this.categoryRepository.findByName(name);

    if (categoryAlreadyExist) {
      throw new Error('Category Already Exist');
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
