const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Vitoria',
    email: 'vigoncalves@mail.com',
    phone: '1212121212',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Clara',
    email: 'clara@mail.com',
    phone: '1212121212',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactsRepository();
