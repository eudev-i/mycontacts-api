const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  // Listar todas as categorias
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();
    response.json(categories);
  }

  // Criar uma categoria
  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      response.status(400).json({ error: 'Nome é obrigatório' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  // Listar uma categoria
  async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      // 404 : Not found
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(category);
  }

  // Editar uma categoria
  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;
    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.satus(404).json({ error: 'User not found' });
    }

    if (!name) {
      return response.satus(404).json({ error: 'Nome é obrigatório' });
    }

    const category = await CategoriesRepository.update(id, { name });
    // await CategoriesRepository.update(name);

    response.json(category);
  }

  // Deletar uma categoria
  async delete(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'User not found' });
    }
    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
