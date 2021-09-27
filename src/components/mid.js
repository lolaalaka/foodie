import gridone from "../images/gridone.png";
import gridtwo from "../images/gridtwo.png";
import gridthree from "../images/gridthree.png";

const Mid = () => {
  const grid = [
    {
      leftside: gridone,
      toptext: "Create an account",
      midtext: "Create/Login to existing account to get started",
      bottomtext: "An account is created with email and a desired password",
      id: 1,
    },
    {
      leftside: gridtwo,
      toptext: "Explore Varieties",
      midtext: "Shop for your favorite meals as e dey hot",
      bottomtext:
        "Shop for your favorite meals or drinks and enjoy while doing it",
      id: 2,
    },
    {
      leftside: gridthree,
      toptext: "Checkout",
      midtext: "When you're done checkout and get it delivered",
      bottomtext: "When you're done checkout and get it delivered with ease",
      id: 3,
    },
  ];

  return (
    <div>
      {grid.map((item) => (
        <div
          key={item.id}
          className={
            "flexCon flex w-full sm:w-4/5 mx-auto h-1/10 " +
            (item.id === 2 ? "flip" : "unflip")
          }
        >
          <div className="small-con sm:h-1/5 mx-auto">
            <img
              src={item.leftside}
              alt=""
              className="imagescon block mx-auto"
            />
          </div>

          <div className="txt-con text-left lg:pt-32 lg:w-5/12 mx-auto">
            <p className="text-newColor font-bold lg:text-xl">{item.toptext}</p>
            <p className="mt-5 text-2xl font-extrabold lg:text-3xl ">
              {item.midtext}
            </p>
            <p className="mt-7 text-textColor font-semibold lg:text-lg">
              {item.bottomtext}
            </p>
          </div>
        </div>
      ))}

      <div className="buttom-spreadImage mt-5">
        <div className="text-center py-24">
          <p className="mb-10 text-white stay-hungry lowerstay-hungry text-5xl font-extrabold">
            Download the app now
          </p>
          <p className="available text-xl text-white">
            Available on your favorite store. Start your premium experience now
          </p>
          <div className="lowerbtn btn-con flex">
            <button className="button-i block ml-auto mr-3 bg-newColor hover:bg-transparent border  border-transparent hover:border-newColor hover:text-newColor text-white font-semibold py-3 px-4 rounded-full w-40">
              Playstore
            </button>
            <button className="button-ii block mr-auto ml-3 bg-transparent hover:bg-newColor font-semibold border border-newColor text-newColor hover:text-white hover:border-transparent py-3 px-4 rounded-full w-40">
              App Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
