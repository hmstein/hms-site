import { useState } from "react";
import SideBar from "./SideBar";
import AboutMe from "./AboutMe";
import Socials from "./Socials";
import Home from "./Home";

function App() {
  const [state, setState] = useState({ page: "Home" });

  function pageClick(newPage: string) {
    setState({ page: newPage });
    console.log(state.page);
  }

  let content;
  if (state.page === "Home") {
    content = <Home />;
  }
  if (state.page === "AboutMe") {
    content = <AboutMe />;
  }
  if (state.page === "Socials") {
    content = <Socials />;
  }
  return (
    <>
      <div className="flex">
        <SideBar handler={pageClick} />
        {content}
      </div>
    </>
  );
}

export default App;
