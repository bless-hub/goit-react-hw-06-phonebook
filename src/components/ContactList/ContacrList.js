import React from "react";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";
import ContactItem from "./ContactItem";
import { connect } from "react-redux";
import taskActions from "../../redux/tasks/taskActions";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import fade from "./fade.module.css";

const ContactList = ({ contacts, removeContact }) => (
  <>
    <TransitionGroup component="ul" className={style.list}>
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames={fade}>
          <ContactItem
            id={contact.id}
            name={contact.name}
            number={contact.number}
            removeContact={removeContact}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  contacts: state.task.contact.filter((contact) =>
    contact.name.toLowerCase().includes(state.task.filter.toLowerCase())
  ),
});
const mapDispatchToProps = {
  removeContact: taskActions.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
