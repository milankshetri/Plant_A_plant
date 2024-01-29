import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1200px] w-full">
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
            <Img
              className="h-[78px] md:h-auto object-cover w-[259px] sm:w-full"
              src="images/img_paplogo1.png"
              alt="logo"
            />
            <div className="flex flex-col gap-4 items-start justify-start w-[119px]">
              <Text
                className="text-base text-white-A700 w-full"
                size="txtOpenSansBold16WhiteA700"
              >
                Quick Links
              </Text>
              <ul className="flex flex-col gap-2 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-white-A700"
                    size="txtOpenSansRegular16WhiteA700"
                  >
                    About Us
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-white-A700"
                    size="txtOpenSansRegular16WhiteA700"
                  >
                    Bulk Order
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-white-A700"
                    size="txtOpenSansRegular16WhiteA700"
                  >
                    Gifts
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-white-A700"
                    size="txtOpenSansRegular16WhiteA700"
                  >
                    Organic Garden
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-[101px]">
              <Text
                className="text-base text-white-A700 w-full"
                size="txtOpenSansBold16WhiteA700"
              >
                Legal
              </Text>
              <ul className="flex flex-col gap-2 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-white-A700"
                    size="txtOpenSansRegular16WhiteA700"
                  >
                    T&C
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-white-A700"
                    size="txtOpenSansRegular16WhiteA700"
                  >
                    Privacy Policy
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-white-A700"
                    size="txtOpenSansRegular16WhiteA700"
                  >
                    Returns{" "}
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-white-A700"
                    size="txtOpenSansRegular16WhiteA700"
                  >
                    Shipping
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-white-A700"
                    size="txtOpenSansRegular16WhiteA700"
                  >
                    Cancellation
                  </Text>
                </li>
              </ul>
            </div>
            <div
              className="common-pointer flex flex-col gap-4 items-start justify-start w-[81px]"
              onClick={() => navigate("/checkout")}
            >
              <Text
                className="text-base text-white-A700 w-full"
                size="txtOpenSansBold16WhiteA700"
              >
                Support
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtOpenSansRegular16WhiteA700"
                >
                  FAQs
                </Text>
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtOpenSansRegular16WhiteA700"
                >
                  Contact Us
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="sm:flex-1 h-40 md:h-auto object-cover w-[178px] sm:w-full"
            src="images/img_compantbadge.png"
            alt="companybadge"
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
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
