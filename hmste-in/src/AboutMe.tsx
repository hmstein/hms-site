import ProgressiveImg from "./components.tsx/ProgressiveImg";

const AboutMe = () => {
  return (
    <>
      <div className="pl-24 bg-stone-800 font-mono lg:flex">
        <div className="flex-col grow lg:w-1/3 rounded-sm m-4 p-4 text-orange-300 bg-stone-700 shadow-lg">
          <div className="text-3xl font-bold">About Me</div>
          <div className="flex flex-col p-1">
            <div className=" text-sm text-orange-100">Location: New Jersey</div>
            <div className=" text-sm text-orange-100">Age: 34</div>
          </div>
          <div className="pt-3 text-orange-200">
            Software Engineer with over 5 years of full time experience seeking
            opportunities to help build technology for growing organizations. I
            specialize in back end technologies, but have robust experience
            contributing to projects as a full stack engineer. I am an intuitive
            learner, avid problem solver, and analytical thinker who values
            collaboration and communication. I'm open to contract work or full
            time eomployment.
          </div>
          <div className="pt-3 text-orange-200">
            Since being laid off in 2023, I've taken time to travel, engage with
            the creative pursuits outside my career, and helped my family
            navigate through a medical crisis. In 2025, I'm seeking a new
            endeavor with a fresh perspective.
          </div>
        </div>
        <div className="mx-4 my-4">
          <ProgressiveImg
            placeholderSrc="https://github.com/hmstein/hms-site/blob/main/hmste-in/src/assets/tiny-Harrison-1-17.jpg?raw=true"
            imgSrc="https://github.com/hmstein/hms-site/blob/main/hmste-in/src/assets/Harrison-1-17.jpg?raw=true"
            width="500"
            height="750"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
