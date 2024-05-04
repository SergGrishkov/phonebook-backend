import express from "express";
import {
  getContactsController,
  deleteContactController,
  createContactController,
} from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import {createContactSchema} from '../schemas/contactsSchemas.js'
import {checkId} from '../middlewares/checkId.js'

const contactsRouter = express.Router();

contactsRouter.get("/", getContactsController);

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  createContactController
);

contactsRouter.delete("/:id", checkId, deleteContactController);

export default contactsRouter;
