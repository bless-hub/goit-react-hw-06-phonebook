import { combineReducers } from "redux";
import taskTypes from "./tasksTypes";

const contact = (state = [], { type, payload }) => {
  switch (type) {
    case taskTypes.ADD:
      return [...state, payload.tasks];

    case taskTypes.REMOVE:
      return state.filter((task) => task.id !== payload.contactId);

    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case taskTypes.CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({ contact, filter });

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
