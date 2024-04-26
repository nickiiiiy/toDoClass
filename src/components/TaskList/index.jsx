import React, { Component } from "react";
import TaskItem from "../TaskItem";
import "./styles.scss";

class TaskList extends Component {
  render() {
    const { tasks, handleCheckboxChange, deleteTask } = this.props;

    return (
      <ul className="tasks">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleCheckboxChange={handleCheckboxChange}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    );
  }
}

export default TaskList;

// функциональная версия
// import TaskItem from "../TaskItem";
// import "./styles.scss";

// const TaskList = ({ tasks, handleCheckboxChange, deleteTask }) => {
//   return (
//     <ul className="tasks">
//       {tasks.map((task) => (
//         <TaskItem
//           key={task.id}
//           task={task}
//           handleCheckboxChange={handleCheckboxChange}
//           deleteTask={deleteTask}
//         />
//       ))}
//     </ul>
//   );
// };

// export default TaskList;

// классовая версия
// import React from "react";
// import TaskItem from "./TaskItem";

// class TaskList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <ul className="tasks">
//         {this.props.tasks
//           .sort((a, b) => b.id - a.id)
//           .map((task) => (
//             <TaskItem key={task.id} task={task} />
//           ))}
//       </ul>
//     );
//   }
// }

// export default TaskList;
