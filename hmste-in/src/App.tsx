import { useState } from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [] = useState(0);

  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <Content />
      </div>
    </>
  );
}

export default App;
