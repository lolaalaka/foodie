import { useEffect } from "react";
import groupImage from "../images/groupImage.png";
import rightImage from "../images/right-img.png";
import { textAnimation } from "../animations";

const Body = () => {
  useEffect(() => {
    textAnimation();
  }, []);

  return (
    <div>
      <div className="conAll h-screen ">
        <div className="spreadImage relative conAll">
          <div className="text-center pt-10">
            <p className="font-bold food-app textCon">Food App</p>
            <p className="mt-5 stay-hungry text-5xl font-extrabold textCon">
              Why stay hungry when <br /> you can order from Bella Onojie
            </p>
            <p className="mt-7 download text-xl text-textColor textCon">
              Download the bella onojie food app now on
            </p>
            <div className="btn-con flex mt-12">
              <button className="textCon button-i block ml-auto mr-3 bg-newColor hover:bg-transparent border  border-transparent hover:border-newColor hover:text-newColor text-white font-semibold py-3 px-4 rounded-full w-40">
                Playstore
              </button>
              <button className="textCon button-ii block mr-auto ml-3 bg-transparent hover:bg-newColor font-semibold border border-newColor text-newColor hover:text-white hover:border-transparent py-3 px-4 rounded-full w-40">
                App Store
              </button>
            </div>
            <img
              src={groupImage}
              alt="groupImage"
              className="groupImg absolute sm:left-12 md:top-72 md:left-40 lg:left-40 lg:top-52 xl:left-80 xl:top-60"
            />
          </div>
        </div>

        <div className="topimage">
          <img
            src={rightImage}
            alt="rightImage"
            className="rightImg absolute right-10"
          />
        </div>
      </div>
      <div className="bottom-con mt-60 mb-20">
        <p className="text-top text-center text-2xl font-bold">
          How the app works
        </p>
        <div className="line w-full h-px mt-6 bg-gray-400 "></div>
        <p className="text-bottom text-center text-2xl font-bold">
          How the app works
        </p>
      </div>
    </div>
  );
};

export default Body;
