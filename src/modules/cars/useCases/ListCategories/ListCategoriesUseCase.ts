import { Category } from '../../model/Category';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  public execute(): Category[] {
    const allCategories = this.categoryRepository.list();

    return allCategories;
  }
}

export { ListCategoriesUseCase };
