import { useState } from "react";
import SideBar from "./SideBar";

function App() {
  const [] = useState(0);

  return (
    <div className="flex">
      <SideBar />
    </div>
  );
}

export default App;
