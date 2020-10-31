import { v4 as uuid } from "uuid";
import taskTypes from "./tasksTypes";

const addContact = ({ name, number }) => ({
  type: taskTypes.ADD,
  payload: {
    tasks: {
      id: uuid(),
      name,
      number,
    },
  },
});

const removeContact = (contactId) => ({
  type: taskTypes.REMOVE,
  payload: {
    contactId,
  },
});

const changeFilter = (filter) => ({
  type: taskTypes.CHANGE_FILTER,
  payload: {
    filter,
  },
});
export default {
  addContact,
  removeContact,
  changeFilter,
};
