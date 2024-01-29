import React from "react";

import { Button, Img, Text } from "components";

const HomePageCard31 = (props) => {
  
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[175px] items-start justify-start p-2 rounded-lg w-full"
          style={{ backgroundImage: "url('images/img_frame65_7.png')" }}
        >
          <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[162px] w-full">
            <div className="h-16 relative w-16">
              <Img
                className="h-16 m-auto rounded-lg w-16"
                src="images/img_star1.svg"
                alt="starOne"
              />
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-center text-white-A700 text-xs w-2/5 sm:w-full"
                size="txtOpenSansBold12"
              >
                {props?.offer}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
          <Text
            className="text-blue_gray-900 text-xl w-full"
            size="txtOpenSansBold20"
          >
            {props?.plantname}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <Text
              className="text-blue_gray-900 text-center text-xl w-auto"
              size="txtOpenSansRegular20"
            >
              {props?.price}
            </Text>
            <Text
              className="line-through text-base text-center text-red-800 w-auto"
              size="txtOpenSansLight16"
            >
              {props?.priceOne}
            </Text>
          </div>
        </div>
        <Button
          className="cursor-pointer font-bold font-opensans h-16 leading-[normal] rounded-lg text-center text-xl w-full"
          shape="round"
          color="green_700"
          size="2xl"
          variant="fill"
       
        >
          {props?.buy}
        </Button>
      </div>
    </>
  );
};

HomePageCard31.defaultProps = {
  offer: (
    <>
      25%
      <br />
      off
    </>
  ),
  plantname: "Adenium Plant",
  price: "$ 350",
  priceOne: "$ 450",
  buy: "Buy",
};

export default HomePageCard31;
