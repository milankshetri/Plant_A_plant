import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import HomePageCard from "components/HomePageCard";
import HomePageCard3 from "components/HomePageCard3";
import HomePageCard31 from "components/HomePageCard31";

const HomePagePage = () => {
  const navigate = useNavigate();

  const homePageCardPropList = [
    {},
    { plantname: "Ficus Benjamina", image: "images/img_frame65_175x242.png" },
    { plantname: "Syngorium Plant", image: "images/img_frame65_1.png" },
    { plantname: "Cactus Peruvianus", image: "images/img_frame65_2.png" },
    { plantname: "Chlorophytum Lemon", image: "images/img_frame65_3.png" },
    { plantname: "Aloe Rauhii", image: "images/img_frame65_4.png" },
    { plantname: "Areca Palm", image: "images/img_frame65_5.png" },
    { plantname: "Sansevieria Black", image: "images/img_frame65_6.png" },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="bg-gray-900_02 flex flex-col items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[120px] w-full">
          <Button
            className="common-pointer bg-transparent cursor-pointer flex h-10 items-center justify-center w-full"
            onClick={() => navigate("/cart")}
            rightIcon={
              <Img
                className="ml-[35px]"
                src="images/img_cart_account_icons.svg"
                alt="Cart & Account Icons"
              />
            }
            size="xs"
          >
            <div className="leading-[normal] text-base text-center text-white-A700">
              Use code FIRST50 for a 50% discount on your first order!
            </div>
          </Button>
        </div>
        <header className="flex md:flex-col md:gap-10 gap-[88px] items-center justify-center md:px-5 py-3 w-full">
          <Img
            className="sm:flex-1 h-[51px] md:h-auto object-cover w-[133px] sm:w-full"
            src="images/img_paplogo.png"
            alt="paplogo"
          />
          <ul className="flex md:flex-1 md:flex-col flex-row gap-14 h-14 md:h-auto md:hidden items-center justify-center p-2 w-auto md:w-full common-row-list">
            <li>
              <a
                href="javascript:"
                className="text-center text-green-700 text-lg"
              >
                <Text size="txtOpenSansSemiBold18">Home</Text>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <div className="flex flex-row gap-1 items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-center hover:text-green-700 text-lg w-auto"
                    size="txtOpenSansSemiBold18Bluegray900"
                  >
                    Plants
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <div className="flex flex-row gap-1 items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-center hover:text-green-700 text-lg w-auto"
                    size="txtOpenSansSemiBold18Bluegray900"
                  >
                    Planters
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown_One"
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <div className="flex flex-row gap-1 items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-center hover:text-green-700 text-lg w-auto"
                    size="txtOpenSansSemiBold18Bluegray900"
                  >
                    Essentials
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown_Two"
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <div className="flex flex-row gap-1 items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-center hover:text-green-700 text-lg w-auto"
                    size="txtOpenSansSemiBold18Bluegray900"
                  >
                    Services
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown_Three"
                  />
                </div>
              </a>
            </li>
          </ul>
          <div className="flex flex-1 flex-row gap-3 h-10 md:h-auto items-center justify-start outline outline-[0.5px] outline-blue_gray-900 p-3 rounded-md w-full">
            <Img
              className="h-6 w-6"
              src="images/img_searchblack24dp.svg"
              alt="searchblack24dp"
            />
            <Text
              className="flex-1 text-base text-blue_gray-900_7f w-auto"
              size="txtOpenSansSemiBold16"
            >
              Search{" "}
            </Text>
          </div>
       
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <Img
            className="h-80 sm:h-auto object-cover w-full"
            src="images/img_rectangle50.png"
            alt="rectangleFifty"
          />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center max-w-[1200px] mt-8 mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-2 items-center justify-end max-w-[1200px] w-full">
            <Text
              className="text-base text-center text-green-700 underline w-auto"
              size="txtOpenSansRegular16"
            >
              See all{" "}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowright_green_700.svg"
              alt="arrowright"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 h-[231px] justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-6 h-[231px] md:h-auto items-center justify-center w-full">
              <Img
                className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                src="images/img_rectangle51.png"
                alt="rectangleFiftyOne"
              />
              <Text
                className="text-base text-blue_gray-900 text-center tracking-[3.20px] uppercase w-full"
                size="txtOpenSansBold16"
              >
                BONSAI
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 h-[231px] md:h-auto items-center justify-center w-full">
              <Img
                className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                src="images/img_rectangle51_180x180.png"
                alt="rectangleFiftyOne"
              />
              <Text
                className="text-base text-blue_gray-900 text-center tracking-[3.20px] uppercase w-full"
                size="txtOpenSansBold16"
              >
                CACTUS
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 h-[231px] md:h-auto items-center justify-center w-full">
              <Img
                className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                src="images/img_rectangle51_1.png"
                alt="rectangleFiftyOne"
              />
              <Text
                className="text-base text-blue_gray-900 text-center tracking-[3.20px] uppercase w-full"
                size="txtOpenSansBold16"
              >
                CREEPERS
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 h-[231px] md:h-auto items-center justify-center w-full">
              <Img
                className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                src="images/img_rectangle51_2.png"
                alt="rectangleFiftyOne"
              />
              <Text
                className="text-base text-blue_gray-900 text-center tracking-[3.20px] uppercase w-full"
                size="txtOpenSansBold16"
              >
                Succulents
              </Text>
            </div>
            <div className="flex flex-1 md:flex-1 flex-col gap-6 h-[231px] md:h-auto items-center justify-center w-auto md:w-full">
              <Img
                className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                src="images/img_rectangle51_3.png"
                alt="rectangleFiftyOne"
              />
              <Text
                className="text-base text-blue_gray-900 text-center tracking-[3.20px] uppercase w-full"
                size="txtOpenSansBold16"
              >
                seeds
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 h-[231px] md:h-auto items-center justify-center w-full">
              <Img
                className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                src="images/img_rectangle51_4.png"
                alt="rectangleFiftyOne"
              />
              <Text
                className="text-base text-blue_gray-900 text-center tracking-[3.20px] uppercase w-full"
                size="txtOpenSansBold16"
              >
                gifting
              </Text>
            </div>
          </List>
        </div>
        <div className="flex flex-col font-unna gap-7 h-[536px] md:h-auto items-center justify-start max-w-[1200px] mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
              size="txtUnnaBold48"
            >
              Best Selling
            </Text>
            <Line className="bg-blue_gray-900_cc h-0.5 w-[87%]" />
          </div>
          <div className="font-opensans gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-full items-start justify-start w-full">
            <HomePageCard3
              className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
              indoorplants={
                <>
                  Indoor
                  <br />
                  Plants
                </>
              }
            />
            <HomePageCard3 className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full" />
            <HomePageCard3
              className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
              indoorplants={
                <>
                  Flowering
                  <br />
                  Plants
                </>
              }
            />
          </div>
        </div>
        <div
          className="common-pointer flex flex-col font-unna gap-7 h-[861px] md:h-auto items-center justify-start max-w-[1200px] mt-[120px] mx-auto md:px-5 w-full"
          onClick={() => navigate("/signup")}
        >
          <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
              size="txtUnnaBold48"
            >
              Trending Plants
            </Text>
            <Line className="bg-blue_gray-900_cc h-0.5 w-[64%]" />
          </div>
          <div className="flex flex-col font-opensans h-full items-start justify-start">
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              {homePageCardPropList.map((props, index) => (
                <React.Fragment key={`HomePageCard${index}`}>
                  <HomePageCard
                    className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col font-unna gap-7 items-center justify-center max-w-[1200px] mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
              size="txtUnnaBold48"
            >
              Blogs
            </Text>
            <Line className="bg-blue_gray-900_cc h-0.5 w-full" />
          </div>
          <div className="flex md:flex-col flex-row font-opensans gap-6 items-center justify-center w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col gap-7 h-[286px] items-center justify-center md:px-10 px-12 sm:px-5 py-10 rounded-[16px] shadow-bs w-full"
              style={{ backgroundImage: "url('images/img_blogcard1.png')" }}
            >
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                size="txtOpenSansRegular28"
              >
                <>
                  8 Best <br />
                  Low Maintenance Plants <br />
                  For a Busy Home
                </>
              </Text>
              <Button
                className="cursor-pointer font-bold h-16 leading-[normal] rounded-lg text-center text-xl w-[400px]"
                shape="round"
                color="green_700"
                size="2xl"
                variant="fill"
              >
                Read
              </Button>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col gap-6 h-[286px] items-center justify-center md:px-10 px-12 sm:px-5 py-10 rounded-[16px] shadow-bs w-full"
              style={{ backgroundImage: "url('images/img_blogcard2.png')" }}
            >
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                size="txtOpenSansRegular28"
              >
                <>
                  Air Purifying Plants <br />
                  You Should Take Home <br />
                  Today
                </>
              </Text>
              <Button
                className="cursor-pointer font-bold h-16 leading-[normal] rounded-lg text-center text-xl w-[400px]"
                shape="round"
                color="green_700"
                size="2xl"
                variant="fill"
              >
                Read
              </Button>
            </div>
          </div>
        </div>
        <List
          className="flex flex-col font-unna gap-[116px] items-center max-w-[1200px] mt-[116px] mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <div
            className="common-pointer flex flex-1 flex-col gap-7 items-center justify-start max-w-[1200px] w-full"
            onClick={() => navigate("/signup")}
          >
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                size="txtUnnaBold48"
              >
                Hot Sale
              </Text>
              <Line className="bg-blue_gray-900_cc h-0.5 w-full" />
            </div>
            <div className="flex flex-col font-opensans h-[370px] md:h-auto items-start justify-start w-full">
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[369px] md:h-auto items-start justify-start w-full">
                <HomePageCard31 className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full" />
                <HomePageCard31
                  className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                  plantname="Ficus Twilight"
                />
                <HomePageCard31
                  className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                  plantname="Rhoeo Plant"
                />
                <HomePageCard31
                  className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                  plantname="Ctenanthe burle"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-7 items-center justify-center max-w-[1200px] w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                size="txtUnnaBold48"
              >
                Planters
              </Text>
              <Line className="bg-blue_gray-900_cc h-0.5 w-full" />
            </div>
            <div className="font-opensans gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[370px] md:h-auto items-start justify-start max-w-[1200px] w-full">
              <HomePageCard31
                className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                plantname="Tale Pot"
              />
              <HomePageCard31
                className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                plantname="Ice Cream Pot"
              />
              <HomePageCard31
                className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                plantname="Beige Fracture"
              />
              <HomePageCard31
                className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                plantname="Mint Fusion"
              />
            </div>
          </div>
        </List>
        <div className="flex md:flex-col flex-row font-opensans gap-6 items-center justify-start max-w-[1200px] mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col gap-7 items-start justify-center w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col font-unna gap-[15px] items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-full"
                  size="txtUnnaBold48"
                >
                  Landscape Gardening
                </Text>
                <Line className="bg-blue_gray-900_cc h-0.5 w-[35%]" />
              </div>
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtOpenSansRegular24"
              >
                <span className="text-blue_gray-900 font-opensans text-left font-normal">
                  <>
                    Whether it is growing your own food or setting <br />
                    up your roof-top garden, we provide the highest <br />
                    quality landscaping services, contributing to a greener
                    world and substantial living!
                    <br />
                  </>
                </span>
                <span className="text-red-A700 font-opensans text-left font-normal">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-blue_gray-900 font-opensans text-left font-normal">
                  <>
                    Schedule your service appointment today!
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-red-800 font-opensans text-left text-xl font-light italic">
                  *Service only available in Telangana and AndhraPradesh.
                </span>
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold h-16 leading-[normal] rounded-lg text-center text-xl w-[282px]"
              shape="round"
              color="green_700"
              size="2xl"
              variant="fill"
            >
              Book Now!
            </Button>
          </div>
          <Img
            className="flex-1 md:flex-none md:h-[439px] sm:h-auto h-full max-h-[439px] object-cover rounded-[16px] sm:w-[] md:w-[]"
            src="images/img_rectangle58.png"
            alt="rectangleFiftyEight"
          />
        </div>
        <div className="flex flex-col font-unna gap-7 items-center justify-center max-w-[1200px] mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[15px] items-center justify-start w-auto sm:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
              size="txtUnnaBold48"
            >
              Celebs You Love, Love Us{" "}
            </Text>
            <Line className="bg-blue_gray-900_cc h-0.5 w-[41%]" />
          </div>
          <div className="flex flex-col font-opensans gap-5 h-[640px] md:h-auto items-center justify-center rounded-[16px] shadow-bs3 w-full">
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-full justify-start w-full"
              orientation="horizontal"
            >
              <div
                className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                style={{ backgroundImage: "url('images/img_frame35.png')" }}
              >
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtOpenSansRegular16WhiteA700"
                >
                  Celeb 1
                </Text>
              </div>
              <div
                className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                style={{ backgroundImage: "url('images/img_frame36.png')" }}
              >
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtOpenSansRegular16WhiteA700"
                >
                  Celeb 1
                </Text>
              </div>
              <div
                className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                style={{
                  backgroundImage: "url('images/img_frame36_310x285.png')",
                }}
              >
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtOpenSansRegular16WhiteA700"
                >
                  Celeb 1
                </Text>
              </div>
              <div
                className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                style={{ backgroundImage: "url('images/img_frame37.png')" }}
              >
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtOpenSansRegular16WhiteA700"
                >
                  Celeb 1
                </Text>
              </div>
            </List>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-full justify-start w-full"
              orientation="horizontal"
            >
              <div
                className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                style={{
                  backgroundImage: "url('images/img_frame35_310x386.png')",
                }}
              >
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtOpenSansRegular16WhiteA700"
                >
                  Celeb 1
                </Text>
              </div>
              <div
                className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                style={{
                  backgroundImage: "url('images/img_frame37_310x386.png')",
                }}
              >
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtOpenSansRegular16WhiteA700"
                >
                  Celeb 1
                </Text>
              </div>
              <div
                className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                style={{ backgroundImage: "url('images/img_frame38.png')" }}
              >
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtOpenSansRegular16WhiteA700"
                >
                  Celeb 1
                </Text>
              </div>
            </List>
          </div>
        </div>
        <Footer className="bg-green-800_01 flex font-opensans gap-2.5 h-[306px] md:h-auto items-center justify-between mt-[120px] pt-10 md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomePagePage;
