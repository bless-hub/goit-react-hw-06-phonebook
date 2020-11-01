import React from "react";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";
import ContactItem from "./ContactItem";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import fade from "./fade.module.css";
// import taskActions from "../../redux/tasks/taskActions";

const ContactList = ({ contacts }) => (
  <>
    <TransitionGroup component="ul" className={style.list}>
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames={fade}>
          <ContactItem
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
const mapStateToProps = (state) => {
  const visibleContacts = state.tasks.items.filter((task) =>
    task.name.toLowerCase().includes(state.tasks.filter.toLowerCase())
  );
  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
