import React from "react";
import style from "./Filter.module.css";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import fadeFilter from "./Fadefilter.module.css";
import taskActions from "../../redux/tasks/taskActions";
import { connect } from "react-redux";

const Filter = ({ contacts, value, onChangeFilter }) => (
  <>
    {contacts.length > 1 && (
      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        appear
        unmountOnExit
        classNames={fadeFilter}
      >
        <div>
          <p className={style.inputHeader}>Find contact by name</p>
          <input
            className={style.input}
            type="text"
            value={value}
            placeholder="find contact"
            onChange={(e) => onChangeFilter(e.target.value)}
          />
        </div>
      </CSSTransition>
    )}
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.tasks.filter,
  contacts: state.tasks.items,
});
const mapDispatchToProps = {
  onChangeFilter: taskActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
