import logo from "../images/phone-logo.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";

const Footer = () => {
  return (
    <footer className="relative  mx-5 my-5">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="btm-logo pl-3" />
        </div>
        <div className="flex lg:ml-10 btm-con">
          <img src={twitter} alt="logo" className="pl-3 w-7" />
          <img src={instagram} alt="logo" className="pl-3 w-7" />
          <img src={facebook} alt="logo" className="pl-3 w-7" />
        </div>
        <p className="text-xs para-1">Copywright 2020 Bella Onojie.com</p>
      </div>
      <p className="text-xs text-center para-2">
        Copywright 2020 Bella Onojie.com
      </p>
    </footer>
  );
};

export default Footer;
