import React, { Component } from "react";
import pen from "../../image/pen.svg";
import drawer from "../../image/drawer.svg";
import "./styles.scss";

class TaskItem extends Component {
  render() {
    const { task, handleCheckboxChange, deleteTask, handleEditTask } =
      this.props;

    return (
      <li className="todo-list">
        <div className="todo-list__group">
          <input
            type="checkbox"
            className="todo-list__checkbox"
            checked={task.checked}
            // id={task.id}
            // name={task.name}
            onChange={() => handleCheckboxChange(task.id)}
          />
          <p className="todo-list__label">{task.name}</p>
        </div>
        <div className="todo-list__buttons">
          <button
            onClick={() => deleteTask(task.id)}
            className="todo-list__delete"
          >
            <img src={drawer} alt="" />
          </button>
          <button
            onClick={() => handleEditTask(task.id)}
            className="todo-list__edit"
          >
            <img src={pen} alt="" />
          </button>
        </div>
      </li>
    );
  }
}

export default TaskItem;
