import React, { Component } from "react";
import plus from "../../image/plus.svg";
import "./styles.scss";

class AddTask extends Component {
  render() {
    const { task, checkValidation, error, handleChangeInput } = this.props;

    return (
      <div>
        <form className="add-task" onSubmit={handleChangeInput}>
          <div className="add-task__wrapper">
            {error.descriptionError && (
              <span className="add-task__error">{error.descriptionError}</span>
            )}
            <div className="add-task__inner">
              <input
                id="task"
                type="text"
                className="add-task__input"
                placeholder="Create a new todo..."
                onChange={(e) => handleChangeInput("name", e.target.value)}
                value={task.name}
                required
                autoFocus
                maxLength={60}
              />
              <button
                className="add-task__btn"
                onClick={checkValidation}
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

export default AddTask;
// функциональная версия*************
// import plus from "../../image/plus.svg";
// import "./styles.scss";
// const AddTask = ({ task, checkValidation, error, handleChangeInput }) => {
//   return (
//     <div>
//       <form className="add-task" onSubmit={handleChangeInput}>
//         <div className="add-task__wrapper">
//           {error.descriptionError && (
//             <span className="add-task__error">{error.descriptionError}</span>
//           )}
//           <div className="add-task__inner">
//             <input
//               id="task"
//               type="text"
//               className="add-task__input"
//               placeholder="Create a new todo..."
//               onChange={(e) => handleChangeInput("name", e.target.value)}
//               value={task.name}
//               required
//               autoFocus
//               maxLength={60}
//             />
//             <button
//               className="add-task__btn"
//               onClick={checkValidation}
//               aria-label="Add task"
//               type="submit"
//             >
//               <img className="add-task__img" src={plus} alt="" />
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddTask;

// Классовая версия **********
// import { PlusIcon } from "@heroicons/react/24/solid";
// import { Component } from "react";

// class CustomForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       task: props.task || "",
//     };

//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.onInputChange = this.onInputChange.bind(this);
//   }

//   handleFormSubmit(event) {
//     event.preventDefault();
//     this.props.handleFormSubmit(this.state.task);
//   }

//   onInputChange(event) {
//     this.setState({ task: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <form className="todo" onSubmit={this.handleFormSubmit}>
//           <div className="todo__wrapper">
//             <input
//               id="task"
//               type="text"
//               className="todo__input"
//               placeholder="Create a new todo..."
//               onChange={this.onInputChange}
//               value={this.state.task}
//               required
//               autoFocus
//               maxLength={60}
//             />
//             <label htmlFor="task" className="todo__label"></label>
//           </div>
//           <button aria-label="Add task" type="submit">
//             <PlusIcon className="todo__btn" />
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default CustomForm;
