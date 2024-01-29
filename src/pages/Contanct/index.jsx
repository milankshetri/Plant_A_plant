import React from "react";

import { Button, Img, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const ContanctPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto w-full">
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
        <Footer1 className="bg-green-800_01 flex gap-[10.08px] h-[308px] md:h-auto items-center justify-between mt-[781px] pt-[40.31px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContanctPage;
