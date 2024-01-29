import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, List, Radio, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const CheckOutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-gray-900_02 flex flex-col items-center justify-center max-w-[1566px] md:px-10 sm:px-5 px-[120.92px] w-full">
            <div className="flex sm:flex-col flex-row gap-[12.09px] h-10 md:h-auto items-center justify-center max-w-[1324px] mx-auto py-[8.06px] w-full">
              <Text
                className="flex-1 text-[16.12px] text-center text-white-A700 w-auto"
                size="txtOpenSansRomanBold1612"
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
          <Header1 className="flex items-center justify-center outline outline-[1px] outline-blue_gray-900 md:px-5 w-full" />
          <div className="flex flex-col font-inter items-start justify-start md:ml-[0] ml-[172px] mt-[202px] md:px-5 w-auto">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
              size="txtInterMedium36"
            >
              Billing Details
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[1193px] mt-[37px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      First Name
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="frame803"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Company Name
                  </Text>
                  <Input
                    name="frame803_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Street Address
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="frame804"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Apartment, floor, etc. (optional)
                  </Text>
                  <Input
                    name="frame805"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Town/City
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="frame806"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Phone Number
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="frame807"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Email Address
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="frame808"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                  ></Input>
                </div>
              </div>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="Save this information for faster check-out next time"
              ></CheckBox>
            </div>
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-8 w-auto sm:w-full">
              <List
                className="flex flex-col gap-8 items-end w-auto"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start my-0 w-auto sm:w-full">
                  <Img
                    className="h-[34px] md:h-auto object-cover rounded-lg w-[47px] sm:w-full"
                    src="images/img_rectangle73.png"
                    alt="rectangleSeventyFour"
                  />
                  <div className="flex flex-row gap-[210px] items-center justify-between w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsRegular16Black900"
                    >
                      Plant Name 1
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsRegular16Black900"
                    >
                      $69
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-start my-0 w-auto sm:w-full">
                  <Img
                    className="h-8 md:h-auto object-cover rounded-lg w-[42px] sm:w-full"
                    src="images/img_rectangle73_120x161.png"
                    alt="rectangleSeventyFour"
                  />
                  <div className="flex flex-row gap-[204px] items-center justify-between w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsRegular16Black900"
                    >
                      Plant Name 22
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsRegular16Black900"
                    >
                      $69
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-[307px] items-start justify-between w-auto sm:w-full">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtPoppinsRegular16Black900"
                        >
                          Subtotal:
                        </Text>
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtPoppinsRegular16Black900"
                        >
                          $138
                        </Text>
                      </div>
                      <Img
                        className="h-px w-[422px]"
                        src="images/img_underline.svg"
                        alt="underline"
                      />
                    </div>
                    <div className="flex flex-row gap-[314px] items-start justify-between w-auto sm:w-full">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtPoppinsRegular16Black900"
                      >
                        Shipping:
                      </Text>
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtPoppinsRegular16Black900"
                      >
                        Free
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-px w-[422px]"
                    src="images/img_underline.svg"
                    alt="underline_One"
                  />
                </div>
                <div className="flex flex-row gap-[335px] items-start justify-between w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16Black900"
                  >
                    Total:
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16Black900"
                  >
                    $138{" "}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[155px] items-center justify-between w-auto sm:w-full">
                <Radio
                  value="Bank"
                  className="text-base text-black-900 text-left"
                  inputClassName="border border-black-900 border-solid h-6 mr-[5px] w-6"
                  checked={false}
                  name="bank"
                  label="Bank"
                  id="Bank"
                ></Radio>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start p-0.5 w-[22%]">
                    <Img
                      className="h-4 md:h-auto my-[3px] object-cover w-[98%]"
                      src="images/img_image32.png"
                      alt="imageThirtyTwo"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-0.5 w-[22%]">
                    <Img
                      className="h-[11px] md:h-auto my-1.5 object-cover w-[98%]"
                      src="images/img_image30.png"
                      alt="imageThirty"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[22%]">
                    <Img
                      className="h-[25px] md:h-auto object-cover w-[93%]"
                      src="images/img_image31.png"
                      alt="imageThirtyOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[22%]">
                    <Img
                      className="h-[18px] md:h-auto my-[3px] object-cover w-[93%]"
                      src="images/img_image33.png"
                      alt="imageThirtyThree"
                    />
                  </div>
                </div>
              </div>
              <Radio
                value="Cashondelivery"
                className="text-base text-black-900 text-left"
                inputClassName="border border-black-900 border-solid h-6 mr-[5px] rounded-[12px] w-6"
                checked={true}
                name="cashondelivery"
                label="Cash on delivery"
                id="Cashondelivery"
              ></Radio>
              <div className="flex flex-col items-end justify-start w-[493px] sm:w-full">
                <Button
                  className="!text-gray-50_01 cursor-pointer font-medium min-w-[190px] rounded text-base text-center"
                  color="green_700"
                  size="xl"
                  variant="fill"
                >
                  Place Order
                </Button>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[171px] rounded text-base text-center"
                color="green_800_01"
                size="xl"
                variant="fill"
                onClick={() => navigate("/homepage")}
              >
                Buy More
              </Button>
            </div>
          </div>
          <Footer1 className="bg-green-800_01 flex font-opensans gap-[10.08px] h-[308px] md:h-auto items-center justify-between mt-[114px] pt-[40.31px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
