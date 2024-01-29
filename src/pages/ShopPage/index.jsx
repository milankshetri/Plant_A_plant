import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Radio, RadioGroup, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomePageCard from "components/HomePageCard";

const menuOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const loadMoreOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopPagePage = () => {
  const navigate = useNavigate();

  const homePageCardPropList = [
    {},
    { plantname: "Ficus Benjamina", image: "images/img_frame65_175x242.png" },
    { plantname: "Syngorium Plant", image: "images/img_frame65_1.png" },
    { plantname: "Chlorophytum Lemon", image: "images/img_frame65_3.png" },
    { plantname: "Aloe Rauhii", image: "images/img_frame65_4.png" },
    { plantname: "Areca Palm", image: "images/img_frame65_5.png" },
    { plantname: "Sansevieria Black", image: "images/img_frame65_6.png" },
    { plantname: "Syngorium Plant", image: "images/img_frame65_1.png" },
    { plantname: "Cactus Peruvianus", image: "images/img_frame65_2.png" },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
              <div className="leading-[normal] text-base text-center text-lime-100">
                Use code FIRST50 for a 50% discount on your first order!
              </div>
            </Button>
          </div>
          <Header className="flex items-center justify-center outline outline-[1px] outline-blue_gray-900 md:px-5 w-full" />
          <div className="h-80 md:px-5 relative w-full">
            <Img
              className="h-80 m-auto object-cover w-full"
              src="images/img_rectangle50_320x1440.png"
              alt="rectangleFifty"
            />
            <Text
              className="absolute h-max inset-[0] justify-center m-auto md:text-5xl text-[100px] text-center text-white-A700 w-max"
              size="txtOpenSansSemiBold100"
            >
              SHOP
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-start justify-start max-w-[1229px] mt-[87px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start w-[22%] md:w-full">
              <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                <div className="h-[420px] relative w-full">
                  <div className="absolute bg-gray-100 border border-gray-300_01 border-solid h-[420px] inset-y-[0] left-[0] my-auto rounded-[10px] shadow-bs w-[96%]"></div>
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[97%]">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex flex-row items-start justify-start w-[70%] md:w-full">
                        <div className="bg-gray-100 flex flex-col h-10 items-center justify-start mb-[5px] p-2 rounded-[50%] w-10">
                          <Button
                            className="flex h-6 items-center justify-center w-6"
                            shape="square"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              src="images/img_arrowright.svg"
                              alt="arrowright"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-blue_gray-900 text-xl tracking-[0.55px]"
                            size="txtOpenSansRegular20"
                          >
                            All Categories
                          </Text>
                          <Text
                            className="text-blue_gray-900_99 text-sm tracking-[0.25px]"
                            size="txtOpenSansRegular14"
                          >
                            Plants on Sale
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mt-0.5 w-[97%] md:w-full">
                        <div className="bg-gray-100 flex flex-row items-center justify-start md:ml-[0] ml-[3px] px-2 w-[89%] md:w-full">
                          <div className="bg-gray-100 flex flex-col h-10 items-center justify-start p-2 rounded-[50%] w-10">
                            <div className="bg-gray-100 flex flex-col h-6 items-center justify-start p-1.5 w-6">
                              <Img
                                className="h-[7px] my-0.5"
                                src="images/img_arrowdown_blue_gray_900.svg"
                                alt="arrowdown_Four"
                              />
                            </div>
                          </div>
                          <Text
                            className="text-base text-blue_gray-900 tracking-[0.35px]"
                            size="txtOpenSansSemiBold16Bluegray900"
                          >
                            Indoor Plants
                          </Text>
                        </div>
                        <div className="h-10 relative w-4/5">
                          <div className="absolute bg-gray-100 flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto px-2 rounded w-[95%]">
                            <div className="bg-gray-100 h-10 rounded-[50%] w-10"></div>
                          </div>
                          <Text
                            className="absolute capitalize right-[0] text-base text-blue_gray-900 top-[20%] tracking-[0.35px]"
                            size="txtOpenSansRegular16Bluegray900"
                          >
                            Maidenhair Fern
                          </Text>
                        </div>
                        <div className="bg-gray-100 flex flex-col items-end justify-start md:ml-[0] ml-[11px]">
                          <Text
                            className="my-2 text-base text-blue_gray-900 tracking-[0.35px]"
                            size="txtOpenSansRegular16Bluegray900"
                          >
                            Kentia Palm
                          </Text>
                        </div>
                        <Text
                          className="bg-gray-100 h-10 justify-center md:ml-[0] ml-[11px] sm:pl-5 pl-[35px] pr-0.5 py-[9px] text-base text-blue_gray-900 tracking-[0.35px] w-[149px]"
                          size="txtOpenSansRegular16Bluegray900"
                        >
                          Snake Plant
                        </Text>
                        <Text
                          className="bg-gray-100 h-10 justify-center sm:px-5 px-[35px] py-[9px] rounded text-base text-blue_gray-900 tracking-[0.44px] w-40"
                          size="txtOpenSansRegular16Bluegray900"
                        >
                          Others
                        </Text>
                        <SelectBox
                          className="capitalize font-bold leading-[normal] md:ml-[0] ml-[55px] text-center text-sm tracking-[0.75px] w-3/5 sm:w-full"
                          placeholderClassName="text-blue_gray-900"
                          indicator={
                            <Img
                              className="h-[7px] w-3 py-2 px-1.5"
                              src="images/img_arrowdown_blue_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="menu"
                          options={menuOptionsList}
                          isSearchable={false}
                          placeholder="Show more"
                          shape="round"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        />
                        <div className="h-10 md:ml-[0] ml-[3px] md:pr-10 pr-12 sm:pr-5 relative w-[99%]">
                          <div className="bg-gray-100 h-10 my-auto rounded w-4/5"></div>
                          <Button
                            className="absolute flex h-10 inset-y-[0] items-center justify-center left-[3%] my-auto w-10"
                            shape="circle"
                            color="gray_100"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_arrowdown_blue_gray_900.svg"
                              alt="arrowright_One"
                            />
                          </Button>
                          <Text
                            className="absolute left-[20%] text-base text-blue_gray-900 top-[20%] tracking-[0.35px]"
                            size="txtOpenSansSemiBold16Bluegray900"
                          >
                            Outdoor Plants
                          </Text>
                        </div>
                        <div className="bg-gray-100 flex flex-col items-center justify-end md:ml-[0] ml-[3px] p-1.5 rounded w-[81%] md:w-full">
                          <div className="flex flex-row items-center justify-start w-[95%] md:w-full">
                            <Button
                              className="flex h-10 items-center justify-center w-10"
                              shape="circle"
                              color="gray_100"
                              size="md"
                              variant="fill"
                            >
                              <Img
                                className="h-6"
                                src="images/img_arrowright_blue_gray_900.svg"
                                alt="arrowright_Two"
                              />
                            </Button>
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-base text-blue_gray-900 tracking-[0.44px]"
                                size="txtOpenSansSemiBold16Bluegray900"
                              >
                                Medicinal Plants
                              </Text>
                              <Text
                                className="text-blue_gray-900_99 text-sm tracking-[0.25px]"
                                size="txtOpenSansRegular14"
                              >
                                Plants on 50% off
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SelectBox
                  className="border border-gray-300_01 border-solid rounded-[10px] shadow-bs text-left text-xl tracking-[0.55px] w-[96%] sm:w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-[29px] mr-[0] w-7"
                      src="images/img_arrowdown_blue_gray_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupThree"
                  options={priceOptionsList}
                  isSearchable={false}
                  placeholder="Price"
                  color="gray_100"
                  size="md"
                  variant="fill"
                />
              </div>
              <div className="bg-gray-100 flex flex-col font-inter gap-[13px] items-start justify-end p-[15px] rounded-[10px] shadow-bs w-[96%] md:w-full">
                <Text
                  className="ml-2 md:ml-[0] mt-2.5 text-blue_gray-900 text-xl tracking-[0.55px]"
                  size="txtInterRegular20"
                >
                  Include
                </Text>
                <RadioGroup
                  className="flex flex-col font-opensans ml-2 md:ml-[0] w-2/5"
                  name="radiogrouptitleSix"
                >
                  <Radio
                    value="Planter"
                    className="mr-[3px] text-base text-blue_gray-900 text-left tracking-[0.35px]"
                    inputClassName="bg-white-A700 border border-blue_gray-900 border-solid h-4 mr-[5px] rounded-lg shadow-bs2 w-4"
                    checked={false}
                    name="radiogrouptitleSix"
                    label="Planter"
                    id="Planter"
                  ></Radio>
                  <Radio
                    value="Combo"
                    className="mr-1 mt-1.5 text-base text-blue_gray-900 text-left tracking-[0.35px]"
                    inputClassName="bg-white-A700 border border-blue_gray-900 border-solid h-4 mr-[5px] rounded-lg shadow-bs2 w-4"
                    checked={false}
                    name="radiogrouptitleSix"
                    label="Combo"
                    id="Combo"
                  ></Radio>
                  <Radio
                    value="Flowers"
                    className="mt-1.5 text-base text-blue_gray-900 text-left tracking-[0.35px]"
                    inputClassName="bg-white-A700 border border-blue_gray-900 border-solid h-4 mr-[5px] rounded-lg shadow-bs2 w-4"
                    checked={false}
                    name="radiogrouptitleSix"
                    label="Flowers"
                    id="Flowers"
                  ></Radio>
                  <Radio
                    value="Service"
                    className="mr-1 mt-1.5 text-base text-blue_gray-900 text-left tracking-[0.35px]"
                    inputClassName="bg-white-A700 border border-blue_gray-900 border-solid h-4 mr-[5px] rounded-lg shadow-bs2 w-4"
                    checked={false}
                    name="radiogrouptitleSix"
                    label="Service"
                    id="Service"
                  ></Radio>
                </RadioGroup>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[74%] md:w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {homePageCardPropList.map((props, index) => (
                  <React.Fragment key={`HomePageCard${index}`}>
                    <HomePageCard
                      className="bg-white-A700 flex flex-1 flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
              <SelectBox
                className="leading-[normal] text-blue_gray-900 text-center text-lg underline w-[14%] sm:w-full"
                placeholderClassName="text-blue_gray-900"
                indicator={
                  <Img
                    className="h-7 mr-[0] w-7"
                    src="images/img_arrowdown_blue_gray_900.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="groupFortyTwo"
                options={loadMoreOptionsList}
                isSearchable={false}
                placeholder="Load more"
              />
            </div>
          </div>
          <Footer className="bg-green-800_01 flex gap-2.5 h-[306px] md:h-auto items-center justify-between mt-[58px] pt-10 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ShopPagePage;
