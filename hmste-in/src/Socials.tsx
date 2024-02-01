import { FaGithub, FaLinkedin } from "react-icons/fa";

const handleClick = (myLink: string) => () => {
  window.open(myLink, "_blank", "noreferrer");
};

const Socials = () => {
  return (
    <>
      <div className="flex grow overflow-auto pl-24 bg-stone-800 font-mono">
        <div className="flex-col overflow-scroll shrink w-96 rounded-sm mx-4 my-4 p-4 text-orange-200">
          <div
            className="flex rounded-sm mx-4 my-8 p-4 text-orange-200 bg-stone-700 shadow-lg hover:text-blue-400"
            onClick={handleClick("https://www.linkedin.com/in/hmstein/")}
          >
            <FaLinkedin size={20} /> <div className="mx-2">LinkedIn</div>
          </div>
          <div
            className="flex rounded-sm mx-4 my-8 p-4 text-orange-200 bg-stone-700 shadow-lg hover:text-white"
            onClick={handleClick("https://github.com/hmstein")}
          >
            <FaGithub size={20} /> <div className="mx-2">GitHub</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
