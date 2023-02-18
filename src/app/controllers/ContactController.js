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
  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      response.status(400).json({ error: 'Nome é obrigatório' });
    }

    // Verificando se existe um contato com o mesmo e-mail
    const contactExists = await ContactsRepository.findByEmail(email);

    // Erro se estiver em uso
    if (contactExists) {
      response.status(400).json({ error: 'O e-mail já está em uso' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
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
