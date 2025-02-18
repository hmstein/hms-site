import ProgressiveImg from "./components.tsx/ProgressiveImg";

const Home = () => {
  return (
    <>
      <div className="flex-col pl-24 bg-stone-800 font-mono">
        <div className="flex items-center min-w-fit overflow-clip sm:h-36 md:h-1/2">
          <div className="mx-0">
            <ProgressiveImg
              placeholderSrc="https://github.com/hmstein/hms-site/blob/main/hmste-in/src/assets/tiny-City.jpg?raw=true"
              imgSrc="https://github.com/hmstein/hms-site/blob/main/hmste-in/src/assets/City.jpg?raw=true"
              width="2000"
              height="965"
            />
          </div>
        </div>
        <div className="flex items-center justify-center text-center">
          <div className="text-center items-center justify-center text-3xl min-w-1/3 rounded-sm mx-4 my-8 p-8 bg-stone-700 text-orange-400">
            <div>Harrison M Stein</div>
            <i className="text-lg text-orange-100">Software Engineer</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
