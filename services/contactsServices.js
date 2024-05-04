import Contact from "../db/models/Contact.js";

export const getAllContacts = () => Contact.find();

export const createContact = (contactData) => Contact.create(contactData);

export const removeContact = (id) => Contact.findByIdAndDelete(id);
