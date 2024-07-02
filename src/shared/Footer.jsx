
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo1 from '../public/assets/logo-1.png'
import logo from '../public/assets/logo.png'

function Footer() {
  const iconsTab = [
    { icon:<Link to="https://www.youtube.com/" ><FaFacebookF /></Link>  },
    { icon:  <Link to="https://www.youtube.com/"><AiOutlineTwitter /></Link>},
    { icon: <Link to="https://www.youtube.com/"><AiFillYoutube /> </Link> },
    { icon:  <Link to="https://www.youtube.com/"><BiLogoPinterestAlt /></Link> },
  ];

  
  return (
    <>
      <footer className="bg-blue-100">
        <div className="container mx-auto  py-[5rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
            <Link to={'/'}>
            <img
                    
                    src={logo1}
                    alt="Logo"
                    className="w-[18rem]"
                />
                <img
                   
                    src={logo}
                    alt="Logo"
                     className="w-[18rem]"
                />
                </Link>
              <p className="text-[15px] lg:text-base sm:text-3xl font-medium text-[#646464]">
              Absolutely thrilled with our solar panel 
installation! The team was professional, efficient, 
and the results speak for themselves. Highly 
recommend!
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464] sm:text-3xl lg:text-base">
              All Rights Reserved
              <br/>
user terms & conditions
<br/>
Privacy policy | © {new Date().getFullYear()} PRAKASH ENTERPRISES <br />{" "}
                {/* Design by{" "} */}
                {/* <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/"
                >
                  RadiusTheme
                </a> */}
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main sm:text-3xl">More Details</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              <Link to='/'>  <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold sm:text-3xl md:text-2xl lg:text-base">
                Home
              </p></Link>

             <Link to='/about'> <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold sm:text-3xl md:text-2xl lg:text-base">
                About Us
              </p>
              </Link>
              <Link to='/ourclient'>  <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold sm:text-3xl md:text-2xl lg:text-base">
              Our Client

              </p>
              </Link>
              <Link to='/ourservice'>  <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold sm:text-3xl md:text-2xl lg:text-base">
              Our Service
              </p></Link>
              <Link to='/contact'> <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold sm:text-3xl md:text-2xl lg:text-base">
              Contact Us
              </p>
              </Link>
             
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main sm:text-3xl md:text-2xl lg:text-base">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]  text-[#646464] font-bold sm:text-3xl md:text-2xl lg:text-base">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium sm:text-3xl md:text-2xl lg:text-base">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold sm:text-3xl md:text-2xl lg:text-base">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium sm:text-3xl md:text-2xl lg:text-base">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold sm:text-3xl md:text-2xl lg:text-base ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;