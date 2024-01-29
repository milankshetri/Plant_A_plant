import React from "react";

import { Button, Img, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1209px] w-full">
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[64.49px] items-start justify-start w-auto md:w-full">
            <Img
              className="h-[78px] md:h-auto object-cover w-[261px] sm:w-full"
              src="images/img_paplogo1.png"
              alt="paplogoOne"
            />
            <div className="flex flex-col gap-[16.12px] items-start justify-start w-[119px]">
              <Text
                className="text-[16.12px] text-white-A700 w-full"
                size="txtOpenSansRomanBold1612"
              >
                Quick Links
              </Text>
              <div className="flex flex-col gap-[8.06px] items-start justify-start w-full">
                <Text
                  className="text-[16.12px] text-white-A700 w-full"
                  size="txtOpenSansRomanBold1612"
                >
                  About Us
                </Text>
                <Text
                  className="text-[16.12px] text-white-A700 w-full"
                  size="txtOpenSansRomanBold1612"
                >
                  Bulk Order
                </Text>
                <Text
                  className="text-[16.12px] text-white-A700 w-full"
                  size="txtOpenSansRomanBold1612"
                >
                  Gifts
                </Text>
                <Text
                  className="max-w-[119px] md:max-w-full text-[16.12px] text-white-A700"
                  size="txtOpenSansRomanBold1612"
                >
                  Organic Garden
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[16.12px] items-start justify-start w-[101px]">
              <Text
                className="text-[16.12px] text-white-A700 w-full"
                size="txtOpenSansRomanBold1612"
              >
                Legal
              </Text>
              <div className="flex flex-col gap-[8.06px] items-start justify-start w-full">
                <Text
                  className="text-[16.12px] text-white-A700 w-full"
                  size="txtOpenSansRomanBold1612"
                >
                  T&C
                </Text>
                <Text
                  className="max-w-[101px] md:max-w-full text-[16.12px] text-white-A700"
                  size="txtOpenSansRomanBold1612"
                >
                  Privacy Policy
                </Text>
                <Text
                  className="text-[16.12px] text-white-A700 w-full"
                  size="txtOpenSansRomanBold1612"
                >
                  Returns{" "}
                </Text>
                <Text
                  className="text-[16.12px] text-white-A700 w-full"
                  size="txtOpenSansRomanBold1612"
                >
                  Shipping
                </Text>
                <Text
                  className="text-[16.12px] text-white-A700 w-full"
                  size="txtOpenSansRomanBold1612"
                >
                  Cancellation
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[16.12px] items-start justify-start w-[81px]">
              <Text
                className="text-[16.12px] text-white-A700 w-full"
                size="txtOpenSansRomanBold1612"
              >
                Support
              </Text>
              <div className="flex flex-col gap-[8.06px] items-start justify-start w-full">
                <Text
                  className="text-[16.12px] text-white-A700 w-full"
                  size="txtOpenSansRomanBold1612"
                >
                  FAQs
                </Text>
                <Text
                  className="max-w-[81px] md:max-w-full text-[16.12px] text-white-A700"
                  size="txtOpenSansRomanBold1612"
                >
                  Contact Us
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="sm:flex-1 h-[161px] md:h-auto object-cover w-[179px] sm:w-full"
            src="images/img_compantbadge.png"
            alt="guarantee67fFiftyTwo"
          />
          <div className="flex flex-col gap-[48.37px] items-end justify-center w-auto">
            <Text
              className="text-[16.12px] text-right text-white-A700"
              size="txtOpenSansRomanBold1612"
            >
              <>
                © 2021 Plan A Plant
                <br />
                All Rights Reserved
              </>
            </Text>
            <div className="flex flex-row gap-[16.12px] items-center justify-center w-auto">
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
                size="xl"
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
                <Img className="h-6" src="images/img_info.svg" alt="info" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
