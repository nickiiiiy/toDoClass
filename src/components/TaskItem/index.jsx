import React, { Component } from "react";
import pen from "../../image/pen.svg";
import drawer from "../../image/drawer.svg";
import "./styles.scss";

class TaskItem extends Component {
  render() {
    const { task, handleCheckboxChange, deleteTask } = this.props;

    return (
      <li className="todo-list">
        <div className="todo-list__group">
          <input
            type="checkbox"
            className="todo-list__checkbox"
            checked={task.checked}
            name={task.name}
            onChange={() => handleCheckboxChange(task.id)}
          />
          <label htmlFor="" className="todo-list__label">
            {task.name}
          </label>
        </div>
        <div onClick={() => deleteTask(task.id)} className="todo-list__buttons">
          <button className="todo-list__delete">
            <img src={drawer} alt="" />
          </button>
          <button className="todo-list__edit">
            <img src={pen} alt="" />
          </button>
        </div>
      </li>
    );
  }
}

export default TaskItem;

// функциональная версия****
// import pen from "../../image/pen.svg";
// import drawer from "../../image/drawer.svg";

// import "./styles.scss";
// const TaskItem = ({ task, handleCheckboxChange, deleteTask }) => {
//   return (
//     <li className="todo-list">
//       <div className="todo-list__group">
//         <input
//           type="checkbox"
//           className="todo-list__checkbox"
//           checked={task.checked}
//           // id={task.id}
//           name={task.name}
//           onChange={() => handleCheckboxChange(task.id)}
//         />
//         <label htmlFor="" className="todo-list__label">
//           {task.name}
//         </label>
//       </div>
//       <div onClick={() => deleteTask(task.id)} className="todo-list__buttons">
//         <button className="todo-list__delete">
//           <img src={drawer} alt="" />
//         </button>
//         <button className="todo-list__edit">
//           <img src={pen} alt="" />
//         </button>
//       </div>
//     </li>
//   );
// };

// export default TaskItem;

// Классовая версия ****
// import React from "react";
// import { CheckIcon } from "@heroicons/react/24/outline";

// class TaskItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isChecked: props.task.checked,
//     };

//     this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
//   }

//   handleCheckboxChange() {
//     this.setState({ isChecked: !this.state.isChecked });
//   }

//   render() {
//     return (
//       <li className="todo-list">
//         <div className="todo-list__group">
//           <input
//             type="checkbox"
//             className="todo-list__checkbox"
//             checked={this.state.isChecked}
//             id={this.props.task.id}
//             name={this.props.task.name}
//             onChange={this.handleCheckboxChange}
//           />
//           <label htmlFor={this.props.task.id} className="label">
//             <p className="todo-list__checkmark">
//               <CheckIcon strokeWidth={2} width={18} height={18} />
//             </p>
//             {this.props.task.name}
//           </label>
//         </div>
//         <div className="todo-list__">
//           <button className="todo-list__delete"></button>
//         </div>
//       </li>
//     );
//   }
// }

// export default TaskItem;
