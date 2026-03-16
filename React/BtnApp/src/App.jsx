import React from "react";

const url = "http://localhost:5001";

const call = (method, path) => {
  fetch(`${url}${path}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      alert(`Response: ${data}`);
    });
};

function App() {
  return (
    <>
      <div>
        <h1>Welcome to my Server Buttons...</h1>

        <div>
          <button onClick={() => call("GET", "/")}>Get</button>
          <button onClick={() => call("POST", "/user")}>Post</button>
          <button onClick={() => call("PUT", "/update")}>Update/Put</button>
          <button onClick={() => call("DELETE", "/delete")}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default App;
