import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row md:gap-10 gap-[88px] items-center justify-center md:px-10 sm:px-5 px-[120px] py-3 w-full">
          <div className="header-row my-0.5">
            <Img
              className="common-pointer h-[51px] md:h-auto object-cover w-[133px]"
              src="images/img_paplogo.png"
              alt="paplogo"
              onClick={() => navigate("/homepage")}
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex md:flex-col flex-row gap-14 h-14 md:h-auto md:hidden items-center justify-center p-2 w-auto common-row-list">
            <li>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-blue_gray-900 text-center text-lg w-auto"
                  size="txtOpenSansSemiBold18Bluegray900"
                >
                  Home
                </Text>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-1 items-start justify-start">
                <Text
                  className="text-blue_gray-900 text-center text-lg w-auto"
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
            </li>
            <li>
              <div className="flex flex-row gap-1 items-start justify-start">
                <Text
                  className="text-blue_gray-900 text-center text-lg w-auto"
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
            </li>
            <li>
              <div className="flex flex-row gap-1 items-start justify-start">
                <Text
                  className="text-blue_gray-900 text-center text-lg w-auto"
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
            </li>
            <li>
              <div className="flex flex-row gap-1 items-start justify-start">
                <Text
                  className="text-blue_gray-900 text-center text-lg w-auto"
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
            </li>
          </ul>
          <div className="flex flex-1 flex-row gap-3 h-10 md:h-auto sm:hidden items-center justify-start outline outline-[1px] outline-blue_gray-900 p-3 rounded-md w-full">
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
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
