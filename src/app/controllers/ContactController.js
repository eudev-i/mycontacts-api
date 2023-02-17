const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Listar todos os itens
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  // Obter UM item
  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404 : Not found
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(contact);
  }

  // Criar um novo item
  store() {

  }

  // Editar um item
  update() {

  }

  // Excluir um item
  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404 : Not found
      return response.status(404).json({ error: 'User not found' });
    }
    await ContactsRepository.delete(id);

    // sendStatus - mandar o status sem body
    // 204 : No Content - deu certo, mas não tem corpo
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
