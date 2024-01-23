import { useState } from "react";
import SideBar from "./SideBar";
import Content from "./Content";

function App() {
  const [] = useState(0);

  return (
    <div className="flex">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
