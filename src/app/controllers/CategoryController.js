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
}

module.exports = new CategoryController();
