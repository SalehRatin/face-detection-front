import React from "react";
import "antd/dist/antd.css";
import "./App.css";
// import Uploader from "./components/uploader-drager";
import UploadContainer from "./containers/UploadContainer";

const App = () => {
  return (
    <div className="App">
      <UploadContainer />
    </div>
  );
};

export default App;
