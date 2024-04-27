import React, { Component } from "react";
import AddTask from "../AddTask";
import TaskList from "../TaskList";
import "./styles.scss";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: {
        name: "",
        checked: false,
        id: Date.now(),
      },
      error: { descriptionError: "" },
      errorEditing: { descriptionError: "" },
      updatedTask: {
        id: "",
        name: "",
        checked: false,
      },
      idUpdatedTask: null,
    };
  }

  handleEditTask = (id) => {
    this.setState({ idUpdatedTask: id });

    if (this.props.tasks) {
      const taskToUpdate = this.props.tasks.find((task) => task.id === id);

      if (!taskToUpdate) {
        return;
      }

      this.setState({
        updatedTask: {
          ...taskToUpdate,
        },
      });
      console.log(this.state.updatedTask);
    }
  };

  handleInputChange = (e) => {
    this.setState({
      updatedTask: {
        ...this.state.updatedTask,
        [e.target.name]: e.target.value,
      },
    });
  };

  cancelEditing = () => {
    this.setState({
      updatedTask: {
        name: "",
        checked: this.props.task.checked,
      },
      idUpdatedTask: null,
      errorEditing: {
        descriptionError: "",
      },
    });
  };

  checkEditingValidation = (e) => {
    e.preventDefault();
    if (!this.state.updatedTask.name.trim()) {
      this.setState({
        errorEditing: {
          ...this.state.errorEditing,
          descriptionError: "Поле не может быть пустым!",
        },
      });
      return;
    }

    this.editTask(this.state.updatedTask);
  };

  editTask = (updatedTask) => {
    const tasksCopy = [...this.props.tasks];
    const oldTaskIndex = tasksCopy.findIndex(
      (task) => task.id === updatedTask.id
    );

    if (oldTaskIndex !== -1) {
      tasksCopy[oldTaskIndex] = { ...updatedTask };
    }

    this.props.setTasks(tasksCopy);
    this.setState({
      idUpdatedTask: null,
      errorEditing: { descriptionError: "" },
    });
  };

  handleCheckboxChange = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      ),
    }));
  };

  handleChangeInput = (key, value) => {
    this.setState((prevState) => ({
      task: {
        ...prevState.task,
        [key]: value,
      },
    }));
  };

  checkValidation = (e) => {
    e.preventDefault();
    if (!this.state.task.name.trim()) {
      this.setState({
        error: {
          descriptionError: "Поле не может быть пустым!",
        },
      });
      return;
    }
    this.addTask();
  };

  addTask = () => {
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        {
          ...prevState.task,
          id: Date.now(),
        },
      ],
      task: { name: "", checked: false },
      error: { descriptionError: "" },
    }));
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  render() {
    const { tasks, task, error, errorEditing, updatedTask, idUpdatedTask } =
      this.state;

    return (
      <div className="container">
        <header>
          <h1>To-do-list</h1>
        </header>
        <AddTask
          error={error}
          handleChangeInput={this.handleChangeInput}
          checkValidation={this.checkValidation}
          task={task}
        />
        {tasks && (
          <TaskList
            handleCheckboxChange={this.handleCheckboxChange}
            tasks={tasks}
            deleteTask={this.deleteTask}
            //
            updatedTask={updatedTask}
            idUpdatedTask={idUpdatedTask}
            errorEditing={errorEditing}
            handleEditTask={this.handleEditTask}
            handleInputChange={this.handleInputChange}
            checkEditingValidation={this.checkEditingValidation}
            cancelEditing={this.cancelEditing}
          />
        )}
      </div>
    );
  }
}

export default MainPage;

// class MainPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       task: { name: "", checked: false },
//       error: { descriptionError: "" },
//     };

//     this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
//     this.handleChangeInput = this.handleChangeInput.bind(this);
//     this.checkValidation = this.checkValidation.bind(this);
//     this.addTask = this.addTask.bind(this);
//     this.deleteTask = this.deleteTask.bind(this);
//   }

//   handleCheckboxChange(id) {
//     const updatedTasks = this.state.tasks.map((task) =>
//       task.id === id ? { ...task, checked: !task.checked } : task
//     );
//     this.setState({ tasks: updatedTasks });
//   }

//   handleChangeInput(key, value) {
//     this.setState({ task: { ...this.state.task, [key]: value } });
//   }

//   checkValidation(e) {
//     e.preventDefault();
//     if (!this.state.task.name.trim()) {
//       this.setState({
//         error: {
//           ...this.state.error,
//           descriptionError: "Поле не может быть пустым!",
//         },
//       });
//       return;
//     }
//     this.addTask();
//   }

//   addTask() {
//     this.setState((prevState) => {
//       const num = prevState.tasks.length + 1;
//       return {
//         tasks: [
//           ...prevState.tasks,
//           {
//             ...prevState.task,
//             id: num,
//           },
//         ],
//         task: { name: "", checked: false },
//         error: { descriptionError: "" },
//       };
//     });
//   }

//   deleteTask(id) {
//     const updateTask = this.state.tasks.filter((task) => task.id !== id);
//     this.setState({ tasks: updateTask });
//   }

//   render() {
//     return (
//       <div className="container">
//         <header>
//           <h1>To-do-list</h1>
//         </header>
//         <AddTask
//           error={this.state.error}
//           handleChangeInput={this.handleChangeInput}
//           checkValidation={this.checkValidation}
//           task={this.state.task}
//         />
//         {this.state.tasks && (
//           <TaskList
//             handleCheckboxChange={this.handleCheckboxChange}
//             tasks={this.state.tasks}
//             deleteTask={this.deleteTask}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default MainPage;

// Другая версия классовая
// import React, { Component } from 'react';
// import AddTask from "../AddTask";
// import TaskList from "../TaskList";
// import "./styles.scss";

// class MainPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       task: { name: "", checked: false },
//       error: { descriptionError: "" }
//     };
//   }

//   handleCheckboxChange = (id) => {
//     const updatedTasks = this.state.tasks.map((task) =>
//       task.id === id ? { ...task, checked: !task.checked } : task
//     );
//     this.setState({ tasks: updatedTasks });
//   };

//   handleChangeInput = (key, value) => {
//     this.setState({ task: { ...this.state.task, [key]: value } });
//   };

//   checkValidation = (e) => {
//     e.preventDefault();
//     if (!this.state.task.name.trim()) {
//       this.setState({ error: { ...this.state.error, descriptionError: "Поле не может быть пустым!" } });
//       return;
//     }
//     this.addTask();
//   };

//   addTask = () => {
//     this.setState((prevState) => {
//       const num = prevState.tasks.length + 1;
//       return {
//         tasks: [
//           ...prevState.tasks,
//           {
//             ...prevState.task,
//             id: num,
//           },
//         ],
//         task: { name: "", checked: false },
//         error: { descriptionError: "" }
//       };
//     });
//   };

//   deleteTask = (id) => {
//     const updateTask = this.state.tasks.filter((task) => task.id !== id);
//     this.setState({ tasks: updateTask });
//   };

//   render() {
//     const { tasks, task, error } = this.state;

//     return (
//       <div className="container">
//         <header>
//           <h1>To-do-list</h1>
//         </header>
//         <AddTask
//           error={error}
//           handleChangeInput={this.handleChangeInput}
//           checkValidation={this.checkValidation}
//           task={task}
//         />
//         {tasks && (
//           <TaskList
//             handleCheckboxChange={this.handleCheckboxChange}
//             tasks={tasks}
//             deleteTask={this.deleteTask}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default MainPage;

// Функцональная версия ****************************
// import { useState } from "react";
// import AddTask from "../AddTask";
// import TaskList from "../TaskList";
// import "./styles.scss";

// const MainPage = () => {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState({
//     name: "",
//     checked: false,
//     id: Date.now(),
//   });
//   const [error, setError] = useState({ descriptionError: "" });
//   // ////////////////////////////

//   const [errorEditing, setEditingError] = useState({ descriptionError: "" });
//   const [updatedTask, setUpdatedTask] = useState({
//     id: "",
//     name: "",
//     checked: task.checked,
//   });
//   const [idUpdatedTask, setIdUpdatedTask] = useState(null);

//   const handleEditTask = (id) => {
//     setIdUpdatedTask(id);
//     const taskToUpdate = tasks.find((task) => task.id === id);
//     if (!taskToUpdate) {
//       return;
//     }

//     setUpdatedTask({
//       ...taskToUpdate,
//     });
//     console.log(updatedTask);
//   };

//   const handleInputChange = (e) => {
//     setUpdatedTask({
//       ...updatedTask,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const cancelEditing = () => {
//     setUpdatedTask({
//       name: "",
//       checked: task.checked,
//     });
//     setIdUpdatedTask(null);
//     setEditingError({
//       descriptionError: "",
//     });
//   };

//   const checkEditingValidation = (e) => {
//     e.preventDefault();
//     if (!updatedTask.name.trim()) {
//       setEditingError({
//         ...errorEditing,
//         descriptionError: "Поле не может быть пустым!",
//       });
//       return;
//     }

//     editTask(updatedTask);
//   };

//   const editTask = (updatedTask) => {
//     const tasksCopy = [...tasks];
//     const oldTaskIndex = tasksCopy.findIndex(
//       (task) => task.id === updatedTask.id
//     );

//     if (oldTaskIndex !== -1) {
//       tasksCopy[oldTaskIndex] = { ...updatedTask };
//     }

//     setTasks(tasksCopy);
//     setIdUpdatedTask(null);
//     setEditingError({ descriptionError: "" });
//   };

//   // ////////////////////////
//   const handleCheckboxChange = (id) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === id ? { ...task, checked: !task.checked } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const handleChangeInput = (key, value) => {
//     setTask({ ...task, [key]: value });
//   };

//   const checkValidation = (e) => {
//     e.preventDefault();
//     if (!task.name.trim()) {
//       setError({ ...error, descriptionError: "Поле не может быть пустым!" });
//       return;
//     }
//     addTask();
//   };

//   const addTask = () => {
//     setTasks((prevState) => {
//       const num = tasks.length + 1;
//       return [
//         ...prevState,
//         {
//           ...task,
//           id: num,
//         },
//       ];
//     });
//     console.log(tasks);
//     setTask({ name: "", checked: false });
//     setError({ descriptionError: "" });
//   };

//   const deleteTask = (id) => {
//     const updateTask = tasks.filter((task) => task.id !== id);
//     setTasks(updateTask);
//   };

//    return (
//     <div className="container">
//       <header>
//         <h1>To-do-list</h1>
//       </header>
//       <AddTask
//         error={error}
//         handleChangeInput={handleChangeInput}
//         checkValidation={checkValidation}
//         task={task}
//       />
//       {tasks && (
//         <TaskList
//           handleCheckboxChange={handleCheckboxChange}
//           tasks={tasks}
//           deleteTask={deleteTask}
//           //
//           updatedTask={updatedTask}
//           idUpdatedTask={idUpdatedTask}
//           errorEditing={errorEditing}
//           handleEditTask={handleEditTask}
//           handleInputChange={handleInputChange}
//           checkEditingValidation={checkEditingValidation}
//           cancelEditing={cancelEditing}
//         />
//       )}
//     </div>
//   );
// };

// export default MainPage;

// Классовая версия**************
// import { Component } from "react";
// import CustomForm from "../CustomForm";
// import TaskList from "../TaskList";

// class MainPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tasks: [],
//       task: "",
//     };

//     this.addTask = this.addTask.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//   }

//   addTask(item) {
//     this.setState((prevState) => ({
//       tasks: [...prevState.tasks, item],
//     }));
//   }

//   handleFormSubmit(e) {
//     // e.preventDefault();

//     this.addTask({
//       name: this.state.task,
//       checked: false,
//       id: Date.now(),
//     });

//     this.setState({
//       task: "",
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <header>
//           <h1>To-do-list</h1>
//         </header>
//         <CustomForm
//           handleFormSubmit={this.handleFormSubmit}
//           task={this.state.task}
//           setTask={(task) => this.setState({ task })}
//         />
//         <TaskList tasks={this.state.tasks} />
//       </div>
//     );
//   }
// }

// export default MainPage;
