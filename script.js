// Business logic
function Contact(name, email, phone, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }
  
  function AddressBook() {
    this.contacts = [];
  }
  
  AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
  };
  
  AddressBook.prototype.removeContact = function(index) {
    if (this.contacts[index]) {
      this.contacts.splice(index, 1);
    }
  };
  
  // UI logic
  const addressBook = new AddressBook();
  
  window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const list = document.getElementById('contacts-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(preventDefault); // Stop page refresh
  
      const nameInput = document.getElementById('name').value.trim();
      const emailInput = document.getElementById('email').value.trim();
      const phoneInput = document.getElementById('phone').value.trim();
      const addressInput = document.getElementById('address').value.trim();
  
      if (nameInput && emailInput && phoneInput && addressInput) {
        const newContact = new Contact(nameInput, emailInput, phoneInput, addressInput);
        addressBook.addContact(newContact);
        updateContacts();
        form.reset(); // Clear form after adding
      }
    });
  
    function updateContacts() {
      list.innerHTML = ""; // Clear old list
      addressBook.contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = `${contact.name} (${contact.phone})`;
  
        // Show full details when clicked
        li.addEventListener('click', function() {
          alert(
            `Name: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}\nAddress: ${contact.address}`
          );
        });
  
        // Delete contact when double-clicked
        li.addEventListener('dblclick', function() {
          addressBook.removeContact(index);
          updateContacts();
        });
  
        list.appendChild(li);
      });
    }
  });
  