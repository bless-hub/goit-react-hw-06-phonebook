import { combineReducers } from "redux";
import taskActions from "./taskActions";
import { createReducer } from "@reduxjs/toolkit";
import notification from "../../components/Notification/Notification";
// import tasksTypes from "./tasksTypes";

const addContactAction = (state, action) => {
  const newContact = action.payload.task;
  const notificationName = state.find(
    (contact) => contact.name === newContact.name
  );
  if (notificationName) {
    notification();
  } else {
    return [...state, action.payload.task];
  }
};

const removeContactAction = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer([], {
  [taskActions.addContact]: addContactAction,
  [taskActions.removeContact]: removeContactAction,
});

const filter = createReducer("", {
  [taskActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
//==================Before Refactor===============
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case taskActions.addContact.type:
//       return [...state, payload.task];

//     case taskActions.removeContact.type:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case taskActions.changeFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// };
//==================Before Refactor===============

// const contact = (state = [], { type, payload }) => {
//   switch (type) {
//     case taskAction.addContact.type:
//       return [...state, payload.contact];

//     case taskAction.removeContact.type:
//       return state.filter((task) => task.id !== payload.contact);

//     default:
//       return state;
//   }
// };
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case taskAction.changeFilter.type:
//       return payload.contact;

//     default:
//       return state;
//   }
// };

// export default combineReducers({ contacts: itemReducers, filter });

// state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const persistedContacts = localStorage.getItem("contacts");

//     if (persistedContacts) {
//       this.setState({
//         contacts: JSON.parse(persistedContacts),
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   changeFilter = (filter) => {
//     this.setState({ filter });
//   };

//   addContact = ({ name, number }) => {
//     const contact = {
//       id: uuid(),
//       name,
//       number,
//       formErrors: {
//         name: "",
//         number: "",
//       },
//     };

//     const { contacts } = this.state;

//     this.setState((prevState) => {
//       return {
//         contacts: [contact, ...prevState.contacts],
//       };
//     });

//     const sameContact = contacts.some(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (sameContact) {
//       notification();
//       return;
//     }
//   };

//   getFilter = () => {
//     const { filter, contacts } = this.state;

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   removeContact = (contactId) => {
//     this.setState((prevState) => {
//       return {
//         contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//       };
//     });
//   };
