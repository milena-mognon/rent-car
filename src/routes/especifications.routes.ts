import { Router } from 'express';

import { EspecificationRepository } from '../modules/cars/repositories/implementations/EspecificationRepository';
import { CreateEspecificationService } from '../modules/cars/services/CreateEspecificationService';

const especificationsRoutes = Router();

const especificationRepository = new EspecificationRepository();

especificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createEspecificationService = new CreateEspecificationService(
    especificationRepository
  );

  createEspecificationService.execute({ name, description });

  return response.status(201).send();
});

especificationsRoutes.get('/', (request, response) => {
  const allEspecifications = especificationRepository.list();

  return response.json(allEspecifications);
});

export { especificationsRoutes };
