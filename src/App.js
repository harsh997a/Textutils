import "./App.css";
import Aboutus from "./Components/Aboutus";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //check whether the dark mode is enable or not,
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enabled.", "success");
      // setInterval(() => {
      //   document.title='Textutils is amazing.';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install Textutils Now.';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About Textutils" />  */}
      <Router>
        <Navbar
          title="Textutils"
          // aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/aboutus" element={<Aboutus mode={mode} />} />

            <Route
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Try Textutils- word counter,character counter, Remove extraspaces"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
