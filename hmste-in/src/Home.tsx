const Home = () => {
  return (
    <>
      <div className="flex-col pl-24 bg-stone-800 font-mono">
        <div className="flex grow items-center h-1/2 overflow-clip">
          <div className="mx-0 my-1">
            <img src="src/assets/City.jpg" />
          </div>
        </div>
        <div className="flex items-center justify-center text-center">
          <div className="text-center items-center justify-center text-3xl w-1/3 rounded-sm mx-4 my-8 p-8 bg-stone-700 text-orange-400">
            <div>Harrison M Stein</div>
            <div className="text-lg text-orange-100">he/they</div>
            <i className="text-lg text-orange-100">
              Engineering | Creativity | Culture
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;