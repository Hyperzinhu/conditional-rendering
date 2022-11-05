import React from "react";
import Form from "./Form";

var userIsResgistered = false

function App() {
  return (
    <div className="container">
      <Form
        isRegistered={userIsResgistered}
      />
    </div>
  );
}

export default App;
