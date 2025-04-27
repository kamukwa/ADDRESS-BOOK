// Address Book Logic
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
  
  // Places Logic
  function Place(name, location, landmarks, season, notes) {
    this.name = name;
    this.location = location;
    this.landmarks = landmarks;
    this.season = season;
    this.notes = notes;
  }
  
  function PlacesList() {
    this.places = [];
  }
  
  PlacesList.prototype.addPlace = function(place) {
    this.places.push(place);
  };
  
  PlacesList.prototype.removePlace = function(index) {
    if (this.places[index]) {
      this.places.splice(index, 1);
    }
  };
  
  // UI Logic
  const addressBook = new AddressBook();
  const placesList = new PlacesList();
  
  window.addEventListener('DOMContentLoaded', function() {
    // Address Book Form
    const contactForm = document.getElementById('contact-form');
    const contactsList = document.getElementById('contacts-list');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('name').value.trim();
      const emailInput = document.getElementById('email').value.trim();
      const phoneInput = document.getElementById('phone').value.trim();
      const addressInput = document.getElementById('address').value.trim();
  
      if (nameInput && emailInput && phoneInput && addressInput) {
        const newContact = new Contact(nameInput, emailInput, phoneInput, addressInput);
        addressBook.addContact(newContact);
        updateContacts();
        contactForm.reset();
      }
    });
  
    function updateContacts() {
      contactsList.innerHTML = "";
      addressBook.contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = `${contact.name} (${contact.phone})`;
  
        li.addEventListener('click', function() {
          alert(`Name: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}\nAddress: ${contact.address}`);
        });
  
        li.addEventListener('dblclick', function() {
          addressBook.removeContact(index);
          updateContacts();
        });
  
        contactsList.appendChild(li);
      });
    }
  
    // Places Form
    const placeForm = document.getElementById('place-form');
    const placesUl = document.getElementById('places-list');
  
    placeForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const placeName = document.getElementById('place-name').value.trim();
      const location = document.getElementById('location').value.trim();
      const landmarks = document.getElementById('landmarks').value.trim();
      const season = document.getElementById('season').value.trim();
      const notes = document.getElementById('notes').value.trim();
  
      if (placeName && location && landmarks && season && notes) {
        const newPlace = new Place(placeName, location, landmarks, season, notes);
        placesList.addPlace(newPlace);
        updatePlaces();
        placeForm.reset();
      }
    });
  
    function updatePlaces() {
      placesUl.innerHTML = "";
      placesList.places.forEach((place, index) => {
        const li = document.createElement('li');
        li.textContent = `${place.name} (${place.location})`;
  
        li.addEventListener('click', function() {
          alert(`Place: ${place.name}\nLocation: ${place.location}\nLandmarks: ${place.landmarks}\nBest Season: ${place.season}\nNotes: ${place.notes}`);
        });
  
        li.addEventListener('dblclick', function() {
          placesList.removePlace(index);
          updatePlaces();
        });
  
        placesUl.appendChild(li);
      });
    }
  });
  