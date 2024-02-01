import ProgressiveImg from "./components.tsx/ProgressiveImg";

const AboutMe = () => {
  return (
    <>
      <div className="overflow-auto pl-24 bg-stone-800 font-mono lg:flex">
        <div className="grow flex-col overflow-scroll lg:w-1/3 rounded-sm mx-4 my-4 p-4 text-orange-300 bg-stone-700 shadow-lg">
          <div className="text-3xl font-bold">About Me</div>
          <div className="flex flex-col p-1">
            <div className=" text-sm text-orange-100">
              Location: Brooklyn, NY
            </div>
            <div className=" text-sm text-orange-100">Age: 33</div>
          </div>
          <div className="pt-3 text-orange-200">
            Welcome weary traveler. I'm a Software Engineer between jobs,
            finally taking advantage of the time to work on personal projects.
            This site is meant to act as my digital card for now and a place to
            gather my portfolio. I have primarily worked as a back end engineer
            in my professional career, however I'm currently enjoying the
            opportunity to reacquaint myself with the front end.
          </div>
          <div className="pt-3 text-orange-200">
            I have worn many hats in my life. I initially pursued a career in
            music technology out of high school. I still enjoy music production
            software as a hobbyist today, but found the need to pivot my
            skillset to make a more fruitful living in this economy. I
            discovered coding was my next path. While working various working
            class jobs, I studied Computer Science at Sussex County Community
            College.
          </div>
          <div className="pt-3 text-orange-200">
            Shortly after transferring to NJIT to pursue my Bachelor's I began
            work at Selective Insurance. I started as an intern, but eventually
            became a full time Application Developer, enabling me to finish my
            education and graduate in 2020. In 2022, I finally had the chance to
            move to New York City after taking a Rotational Engineering position
            at Meta. However, from the time I joined my team the economic
            writing was on the wall. I was laid off in 2023.
          </div>
          <div className="pt-3 text-orange-200">
            Born and raised in the oft maligned state of New Jersey by a chef
            and a travel agent, I love learning about culture through food. In
            the wake of the layoff, I took a few months off from my career to
            travel outside the country. I feel extremely privileged to have had
            this time since I have had times in my life when I haven't had the
            means. I am refreshed and eager to join a new company and take on
            new projects in 2024.
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
