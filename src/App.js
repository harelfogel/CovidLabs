import * as React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from "./Components/FileUpload";

function App() {
  return (
    <div className="container" style={{ width: "800px"}}>
      <div className="my-5">
        <div className="headlines">
        <h3>Welcome to Covid Labratory</h3>
        </div>
      </div>
      <FileUpload />
    </div>
  );
}
export default App;