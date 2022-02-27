import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoryRepository.list();

  return response.json(allCategories);
});

export { categoriesRoutes };
