/* eslint-disable import/no-anonymous-default-export */
import { v4 as uuid } from "uuid";
import { createAction } from "@reduxjs/toolkit";
// import taskTypes from "./tasksTypes";

const addContact = createAction("contact/add", ({ name, number }) => ({
  payload: {
    task: {
      id: uuid(),
      name,
      number,
    },
  },
}));

const removeContact = createAction("contact/remove");

const changeFilter = createAction("contact/changeFilter");

export default { addContact, removeContact, changeFilter };

//==============До рефактора==========================
// const addContact = ({ name, number }) => ({
//   type: taskTypes.ADD,
//   payload: {
//     task: {
//       id: uuid(),
//       name,
//       number,
//     },
//   },
// });

// const removeContact = (contactId) => ({
//   type: taskTypes.REMOVE,
//   payload: {
//     contactId,
//   },
// });

// const changeFilter = (filter) => ({
//   type: taskTypes.CHANGE_FILTER,
//   payload: {
//     filter,
//   },
// });
//==============До рефактора==========================
