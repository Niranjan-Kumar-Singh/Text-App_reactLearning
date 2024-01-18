import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // For Alert
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

  // For Dark Mode
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("primary");

  const toggleModeRed = () => {
    if (mode === "light") {
      setMode("dark");
      setColor("danger");
      document.body.style.backgroundColor = "#FF6969";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleModeBlue = () => {
    if (mode === "light") {
      setMode("dark");
      setColor("primary");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleModeGreen = () => {
    if (mode === "light") {
      setMode("dark");
      setColor("success");
      document.body.style.backgroundColor = "#4F6F52";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleModeYellow = () => {
    if (mode === "light") {
      setMode("dark");
      setColor("warning");
      document.body.style.backgroundColor = "#FF9843";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="MY-APP"
          mode={mode}
          toggleModeRed={toggleModeRed}
          toggleModeBlue={toggleModeBlue}
          toggleModeGreen={toggleModeGreen}
          toggleModeYellow={toggleModeYellow}
        />

        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes>
            <Route
              exact path="/"
              element={
                <TextForm showAlert={showAlert} mode={mode} color={color} />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes> */}
          <TextForm showAlert={showAlert} mode={mode} color={color} />
          {/* <About /> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
