const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Listar todos os itens
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  // Obter UM item
  show() {

  }

  // Criar um novo item
  store() {

  }

  // Editar um item
  update() {

  }

  // Excluir um item
  delete() {

  }
}

module.exports = new ContactController();
