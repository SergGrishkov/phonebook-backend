import {
  getAllContacts,
  createContact,
  removeContact,
} from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getContactsController = async (req, res, next) => {
  try {
    const result = await getAllContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const createContactController = async (req, res, next) => {
  try {
    const result = await createContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteContactController = async (req, res, next) => {
  try {
    const result = await removeContact(req.params.id);
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
