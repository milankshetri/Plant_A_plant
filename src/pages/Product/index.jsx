import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";
import HomePageCard31 from "components/HomePageCard31";

const yesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductPage = () => {
  const navigate = useNavigate();

  const homePageCard31PropList = [
    {},
    { plantname: "Ficus Twilight" },
    { plantname: "Rhoeo Plant" },
    { plantname: "Ctenanthe burle" },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans sm:gap-10 md:gap-10 gap-[2982px] items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-gray-900_02 flex flex-col items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex sm:flex-col flex-row gap-3 h-10 md:h-auto items-center justify-center max-w-[1200px] mx-auto py-2 w-full">
              <Text
                className="flex-1 text-base text-center text-white-A700 w-auto"
                size="txtOpenSansRegular16WhiteA700"
              >
                Use code FIRST50 for a 50% discount on your first order!
              </Text>
              <Img
                className="h-8 w-[104px]"
                src="images/img_cart_account_icons.svg"
                alt="cartaccounticon"
              />
            </div>
          </div>
          <Header className="flex items-center justify-center outline outline-[1px] outline-blue_gray-900 md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center max-w-[1200px] mt-14 mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col gap-6 h-[553px] md:h-auto items-start justify-start w-full">
              <Img
                className="md:h-auto h-full object-cover rounded-bl-lg rounded-br-lg w-full"
                src="images/img_image.png"
                alt="image_Two"
              />
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowleft"
                />
                <div className="flex flex-1 sm:flex-col flex-row gap-3 items-start justify-start w-full">
                  <Img
                    className="flex-1 h-[108px] md:h-auto max-h-[108px] object-cover rounded-lg sm:w-[]"
                    src="images/img_rectangle63.png"
                    alt="rectangleSixtyThree"
                  />
                  <Img
                    className="flex-1 h-[108px] md:h-auto max-h-[108px] object-cover rounded-lg sm:w-[]"
                    src="images/img_rectangle62.png"
                    alt="rectangleSixtyTwo"
                  />
                  <Img
                    className="flex-1 h-[108px] md:h-auto max-h-[108px] object-cover rounded-lg sm:w-[]"
                    src="images/img_rectangle64.png"
                    alt="rectangleSixtyFour"
                  />
                  <Img
                    className="flex-1 h-[108px] md:h-auto max-h-[108px] object-cover rounded-lg sm:w-[]"
                    src="images/img_rectangle65.png"
                    alt="rectangleSixtyFive"
                  />
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-center pr-2 w-[486px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-full"
                      size="txtOpenSansBold32"
                    >
                      Hoya Linearis
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-auto"
                        size="txtOpenSansRegular32"
                      >
                        $ 350
                      </Text>
                      <Text
                        className="line-through text-2xl md:text-[22px] text-center text-red-800_7f sm:text-xl w-auto"
                        size="txtOpenSansLight24"
                      >
                        $ 450
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="max-w-[560px] md:max-w-full text-blue_gray-900_99 text-xl"
                    size="txtOpenSansRegular20Bluegray90099"
                  >
                    With rounded light green and white-striped leaves, the
                    Calathea Orbifolia is a decorative and unique houseplant.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[70px] items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-row gap-4 items-center justify-center w-auto">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtOpenSansRegular20"
                    >
                      Quantity
                    </Text>
                    <div className="flex flex-row items-center justify-between outline outline-[1px] outline-blue_gray-900 py-1 rounded w-auto">
                      <div className="flex flex-col h-7 md:h-auto items-center justify-center w-7">
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtOpenSansRegular20"
                        >
                          -
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        1
                      </Text>
                      <div className="flex flex-col h-7 md:h-auto items-center justify-center w-7">
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtOpenSansRegular20"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center w-auto">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtOpenSansRegular20"
                    >
                      Include Planter
                    </Text>
                    <SelectBox
                      className="h-9 leading-[normal] text-left text-xl w-[33%] sm:w-full"
                      placeholderClassName="text-blue_gray-900"
                      indicator={
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frameSeventyOne"
                      options={yesOptionsList}
                      isSearchable={false}
                      placeholder="Yes"
                      shape="round"
                      color="blue_gray_900"
                      size="xs"
                      variant="outline"
                    />
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-bold h-16 leading-[normal] rounded-lg text-center text-xl w-[229px]"
                  onClick={() => navigate("/cart")}
                  shape="round"
                  color="green_700"
                  size="2xl"
                  variant="fill"
                >
                  Add to Cart
                </Button>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl"
                    size="txtOpenSansSemiBold20"
                  >
                    <span className="text-blue_gray-900 font-opensans text-left font-semibold">
                      <>
                        Delivery
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-900_99 font-opensans text-left text-base font-normal">
                      Enter your Pincode to check delivery time.
                    </span>
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="h-9 outline outline-[1px] outline-blue_gray-900 pl-2 sm:pr-5 pr-[35px] py-[3px] rounded text-blue_gray-900 text-xl w-36"
                      size="txtOpenSansRegular20"
                    >
                      500009
                    </Text>
                    <Text
                      className="text-green-700 text-xl w-auto"
                      size="txtOpenSansSemiBold20Green700"
                    >
                      CHECK
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start outline outline-[0.5px] outline-blue_gray-900 p-2 rounded-lg w-full">
                  <Text
                    className="text-base text-blue_gray-900_99"
                    size="txtOpenSansRegular16Bluegray90099"
                  >
                    <>
                      Delivery available for this loaction.
                      <br />
                      Typically delivered in 5-7 working days.
                      <br />
                      Standard Delivery.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 flex flex-col items-center justify-start mt-14 w-full">
            <div className="h-[564px] sm:h-[645px] md:px-5 relative w-full">
              <Img
                className="h-[564px] m-auto object-cover w-full"
                src="images/img_background.png"
                alt="background"
              />
              <div className="absolute flex flex-col gap-6 h-max inset-[0] items-center justify-start m-auto max-w-[1200px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <div className="flex flex-col h-[71px] md:h-auto items-start justify-center w-auto">
                    <div className="flex flex-row gap-4 h-full items-center justify-start pl-4 sm:pr-5 pr-6 w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_gray_100.svg"
                        alt="arrowdown_Four"
                      />
                      <Text
                        className="text-gray-100 text-xl w-auto"
                        size="txtOpenSansSemiBold20Gray100"
                      >
                        Care Guide
                      </Text>
                    </div>
                    <Line className="bg-gray-100 h-1 w-full" />
                  </div>
                  <div className="flex flex-col h-[67px] md:h-auto items-start justify-center w-auto">
                    <div className="flex flex-row gap-4 h-full items-center justify-start pl-4 sm:pr-5 pr-6 w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_gray_100.svg"
                        alt="arrowright_One"
                      />
                      <Text
                        className="text-gray-100 text-xl w-auto"
                        size="txtOpenSansSemiBold20Gray100"
                      >
                        Plant Bio
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-[67px] md:h-auto items-start justify-center w-auto">
                    <div className="flex flex-row gap-4 h-full items-center justify-start pl-4 sm:pr-5 pr-6 w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_gray_100.svg"
                        alt="arrowright_Two"
                      />
                      <Text
                        className="text-gray-100 text-xl w-auto"
                        size="txtOpenSansSemiBold20Gray100"
                      >
                        Reviews
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-col font-roboto items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                  <Text
                    className="text-blue_gray-900 text-xl"
                    size="txtRobotoRegular20"
                  >
                    <span className="text-blue_gray-900 font-opensans text-left font-semibold">
                      <>
                        Weekly Watering
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-900_bf font-opensans text-left font-light">
                      Calatheas enjoy weekly waterings, allowing the top 2’ of
                      soil to dry out partially. In winter, we recommend
                      watering less frequently to prevent overwatering and root
                      rot. This plant is not very drought tolerant, and extended
                      periods of dryness will cause leaf edges to brown
                    </span>
                    <span className="text-blue_gray-900 font-opensans text-left font-light">
                      <>
                        .<br />
                      </>
                    </span>
                    <span className="text-gray-900_02 font-opensans text-left font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-900 font-opensans text-left font-semibold">
                      <>
                        Light Requirements
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-900_bf font-opensans text-left font-light">
                      <>
                        Calatheas thrive in medium, indirect sunlight but
                        tolerate lower light levels too. Bright direct sunlight
                        can cause the stunning colours on their leaves to fade,
                        with prolonged exposure likely to burn and scorch their
                        leaves.
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900_02 font-opensans text-left font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-900 font-opensans text-left font-semibold">
                      <>
                        Humidity
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-900_bf font-opensans text-left font-light">
                      Your Calathea will also appreciate being placed in a humid
                      environment, which you can create with by misting it
                      frequently, placing it close to other plants or on a
                      pebble tray partly filled with water. Calatheas thrive in
                      steamy bathrooms and kitchens.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-unna gap-7 items-center justify-start max-w-[1200px] mt-[65px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto sm:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                size="txtUnnaBold48"
              >
                You May Also Like...
              </Text>
              <Line className="bg-blue_gray-900_cc h-0.5 w-1/2" />
            </div>
            <div className="flex flex-col font-opensans h-[370px] md:h-auto items-start justify-start w-full">
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[369px] justify-start w-full"
                orientation="horizontal"
              >
                {homePageCard31PropList.map((props, index) => (
                  <React.Fragment key={`HomePageCard31${index}`}>
                    <HomePageCard31
                      className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <div className="bg-green-800_01 flex flex-col font-opensans h-[306px] md:h-auto items-center justify-between max-w-[1440px] mt-[111px] pt-10 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1200px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
                <Img
                  className="h-[78px] md:h-auto object-cover w-[259px] sm:w-full"
                  src="images/img_paplogo1.png"
                  alt="paplogoOne"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-[119px]">
                  <Text
                    className="text-base text-white-A700 w-full"
                    size="txtOpenSansBold16WhiteA700"
                  >
                    Quick Links
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtOpenSansRegular16WhiteA700"
                    >
                      About Us
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtOpenSansRegular16WhiteA700"
                    >
                      Bulk Order
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtOpenSansRegular16WhiteA700"
                    >
                      Gifts
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtOpenSansRegular16WhiteA700"
                    >
                      Organic Garden
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-[101px]">
                  <Text
                    className="text-base text-white-A700 w-full"
                    size="txtOpenSansBold16WhiteA700"
                  >
                    Legal
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtOpenSansRegular16WhiteA700"
                    >
                      T&C
                    </Text>
                    <a
                      href="javascript:"
                      className="text-base text-white-A700 w-full"
                    >
                      <Text size="txtOpenSansRegular16WhiteA700">
                        Privacy Policy
                      </Text>
                    </a>
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtOpenSansRegular16WhiteA700"
                    >
                      Returns{" "}
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtOpenSansRegular16WhiteA700"
                    >
                      Shipping
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtOpenSansRegular16WhiteA700"
                    >
                      Cancellation
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col gap-4 items-start justify-start w-[81px]"
                  onClick={() => navigate("/checkout")}
                >
                  <a
                    href="javascript:"
                    className="text-base text-white-A700 w-full"
                  >
                    <Text size="txtOpenSansBold16WhiteA700">Support</Text>
                  </a>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <a
                      href="javascript:"
                      className="text-base text-white-A700 w-full"
                    >
                      <Text size="txtOpenSansRegular16WhiteA700">FAQs</Text>
                    </a>
                    <a
                      href="javascript:"
                      className="text-base text-white-A700 w-full"
                    >
                      <Text size="txtOpenSansRegular16WhiteA700">
                        Contact Us
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
              <Img
                className="sm:flex-1 h-40 md:h-auto object-cover w-[178px] sm:w-full"
                src="images/img_compantbadge.png"
                alt="guarantee67fFiftyTwo"
              />
              <div className="flex flex-col gap-12 items-end justify-center w-auto">
                <Text
                  className="text-base text-right text-white-A700"
                  size="txtOpenSansRegular16WhiteA700"
                >
                  <>
                    © 2021 Plan A Plant
                    <br />
                    All Rights Reserved
                  </>
                </Text>
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="gray_900_02"
                    size="xl"
                    variant="fill"
                  >
                    <Img src="images/img_facebook.svg" alt="facebook" />
                  </Button>
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="gray_900_02"
                    size="lg"
                    variant="fill"
                  >
                    <Img src="images/img_trash.svg" alt="trash" />
                  </Button>
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="gray_900_02"
                    size="lg"
                    variant="fill"
                  >
                    <Img src="images/img_info.svg" alt="info" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end sm:px-5 px-[38px] w-full">
          <div className="bg-gray-400_01 h-[120px] md:px-5 w-[13%]"></div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
