import React, { Component } from "react";
import plus from "../../image/plus.svg";

class EditingTaskForm extends Component {
  render() {
    const {
      updatedTask,
      errorEditing,
      handleInputChange,
      checkEditingValidation,
      cancelEditing,
    } = this.props;

    return (
      <div>
        <form className="">
          <div className="">
            {errorEditing.descriptionError && (
              <span className="">{errorEditing.descriptionError}</span>
            )}
            <div className="add-task__inner">
              <input
                id="task"
                type="text"
                name="name"
                className=""
                onChange={handleInputChange}
                value={updatedTask.name}
                required
                autoFocus
              />
              <button
                className="add-task__btn"
                onClick={checkEditingValidation}
                aria-label="Add task"
                type="submit"
              >
                <img className="add-task__img" src={plus} alt="" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditingTaskForm;
