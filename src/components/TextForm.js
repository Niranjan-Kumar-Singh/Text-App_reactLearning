import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("Uppercase was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.color} mx-1`}
          onClick={handleUpClick}
        >
          Convert to UPPER CASE
        </button>
        <button
          className={`btn btn-${props.color} mx-1`}
          onClick={handleLoClick}
        >
          Convert to lower CASE
        </button>
        <button
          className={`btn btn-${props.color} mx-1`}
          onClick={handleClClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word !== "").length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{(0.007 * text.trim().split(/\s+/).filter(word => word !== '').length).toFixed(2)} required minutes to read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the Text Box above to Preview it Here"}
        </p>
      </div>
    </>
  );
}
