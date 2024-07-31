import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <button class="btn btn-primary">Button</button>
      <button className="btn btn-primary">Button</button>

      <h1>Hello world!</h1>
      <button className=" g-5 btn btn-outline">Default</button>
      <button className="btn btn-outline btn-primary">Primary</button>
      <button className="btn btn-outline btn-secondary">Secondary</button>
      <button className="btn btn-outline btn-accent">Accent</button>
    </div>
  );
}

export default App;
