import ProgressiveImg from "./components.tsx/ProgressiveImg";

const AboutMe = () => {
  return (
    <>
      <div className="pl-24 bg-stone-800 font-mono lg:flex">
        <div className="flex-col grow lg:w-1/3 rounded-sm m-4 p-4 text-orange-300 bg-stone-700 shadow-lg">
          <div className="text-3xl font-bold">About Me</div>
          <div className="flex flex-col p-1">
            <div className=" text-sm text-orange-100">
              Location: Brooklyn, NY
            </div>
            <div className=" text-sm text-orange-100">Age: 33</div>
          </div>
          <div className="pt-3 text-orange-200">
            Welcome weary traveler. I'm a Software Engineer between jobs,
            finally taking advantage of the time to work on some personal
            projects, both creative and technical in nature. This site is meant
            to act as my digital media card and a place to gather a portfolio. I
            have primarily worked as a back end engineer in my professional
            career, however I'm currently enjoying reacquainting myself with
            front end development.
          </div>
          <div className="pt-3 text-orange-200">
            Born and raised in New Jersey by a chef and a travel agent, I love
            learning about culture through food. I cook in my spare time and
            love checking out new restaurants every chance I get. I currently
            live in New York and have spent my recent down time traveling. I am
            also a hobbyist musician, and am always ready to crack jokes over a
            tabletop RPG or card game.
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
