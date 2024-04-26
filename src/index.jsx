import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React, { Component } from 'react';
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.scss";

// class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.root = ReactDOM.createRoot(document.getElementById("root"));
//   }

//   componentDidMount() {
//     this.root.render(
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     );
//   }

//   render() {
//     return null;
//   }
// }

// export default Index;
