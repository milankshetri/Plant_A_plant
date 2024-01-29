import React from "react";

import { Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row md:gap-10 gap-[88.67px] items-center justify-center md:px-10 sm:px-5 px-[120.92px] py-[12.09px] w-full">
          <div className="header-row my-0.5">
            <Img
              className="h-[51px] md:h-auto object-cover w-[134px]"
              src="images/img_paplogo.png"
              alt="paplogo"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex md:flex-col flex-row gap-[56.43px] h-14 md:h-auto md:hidden items-center justify-center p-[8.06px] w-auto common-row-list">
            <li>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-[18.14px] text-blue_gray-900 text-center w-auto"
                  size="txtOpenSansRomanBold1814"
                >
                  Home
                </Text>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[4.03px] items-start justify-start">
                <Text
                  className="text-[18.14px] text-blue_gray-900 text-center w-auto"
                  size="txtOpenSansRomanBold1814"
                >
                  Plants
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[4.03px] items-start justify-start">
                <Text
                  className="text-[18.14px] text-blue_gray-900 text-center w-auto"
                  size="txtOpenSansRomanBold1814"
                >
                  Planters
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown_One"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[4.03px] items-start justify-start">
                <Text
                  className="text-[18.14px] text-blue_gray-900 text-center w-auto"
                  size="txtOpenSansRomanBold1814"
                >
                  Essentials
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown_Two"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[4.03px] items-start justify-start">
                <Text
                  className="text-[18.14px] text-blue_gray-900 text-center w-auto"
                  size="txtOpenSansRomanBold1814"
                >
                  Services
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown_Three"
                />
              </div>
            </li>
          </ul>
          <div className="flex flex-1 flex-row gap-[12.09px] h-10 md:h-auto sm:hidden items-center justify-start outline outline-[1px] outline-blue_gray-900 p-[12.09px] rounded-md w-full">
            <Img
              className="h-6 w-6"
              src="images/img_searchblack24dp.svg"
              alt="searchblack24dp"
            />
            <Text
              className="flex-1 text-[16.12px] text-blue_gray-900_7f w-auto"
              size="txtOpenSansRomanBold1612Bluegray9007f"
            >
              Search{" "}
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
