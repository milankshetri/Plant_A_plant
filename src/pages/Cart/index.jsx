import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";

const CartPage = () => {
  const tableData = React.useRef([
    { product: "Remove", price: "$ 99", quantity: "-", total: "$ 99.0" },
    { product: "Remove", price: "$ 99", quantity: "-", total: "$ 99.0" },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-start sm:pr-5 pr-[23px] py-[23px]">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[72%] md:w-full">
              <Text
                className="sm:mt-0 mt-[46px] sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900"
                size="txtOpenSansRomanBold2015"
              >
                1
              </Text>
              <Img
                className="h-[120px] md:h-auto sm:ml-[0] ml-[50px] object-cover rounded-lg w-[42%] sm:w-full"
                src="images/img_rectangle73.png"
                alt="rectangleSeventyThree"
              />
              <div className="flex flex-col gap-4 items-start justify-start ml-6 sm:ml-[0]">
                <Text
                  className="sm:text-[20.18px] md:text-[22.18px] text-[24.18px] text-blue_gray-900"
                  size="txtOpenSansRomanBold2418"
                >
                  Plant Name
                </Text>
                <Text
                  className="sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900 underline"
                  size="txtOpenSansRomanBold2015"
                >
                  {info?.getValue()}
                </Text>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[568px] pb-6 sm:pl-5 pl-[35px] sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900"
            size="txtOpenSansRomanBold2015"
          >
            Product
          </Text>
        ),
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <Text
            className="pl-2 py-[35px] sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900"
            size="txtOpenSansRomanBold2015"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[223px] pb-6 sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900"
            size="txtOpenSansRomanBold2015"
          >
            Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center md:pr-10 sm:pr-5 pr-[65px] py-[65px]">
            <div className="flex flex-row items-start justify-between outline outline-[1px] outline-blue_gray-900 p-[3px] rounded w-[44%]">
              <Text
                className="ml-1 sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900"
                size="txtOpenSansRomanBold2015"
              >
                +
              </Text>
              <Text
                className="sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900 text-center"
                size="txtOpenSansRomanBold2015"
              >
                1
              </Text>
              <Text
                className="mr-1.5 mt-0.5 sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900"
                size="txtOpenSansRomanBold2015"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[261px] pb-[22px] pl-0.5 pt-0.5 sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900 text-center"
            size="txtOpenSansRomanBold2015"
          >
            Quantity
          </Text>
        ),
      }),
      tableColumnHelper.accessor("total", {
        cell: (info) => (
          <Text
            className="py-[35px] sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900"
            size="txtOpenSansRomanBold2015"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[106px] pb-6 pl-1.5 sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900"
            size="txtOpenSansRomanBold2015"
          >
            Total
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-gray-900_02 flex flex-col items-center justify-center max-w-[1451px] md:px-10 sm:px-5 px-[120.92px] w-full">
            <div className="flex sm:flex-col flex-row gap-[12.09px] h-10 md:h-auto items-center justify-center max-w-[1209px] mx-auto py-[8.06px] w-full">
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
          <header className="flex items-center justify-center outline outline-[1px] outline-blue_gray-900 md:px-5 w-full">
            <div className="flex flex-row md:gap-10 gap-[88.67px] items-center justify-center md:px-10 sm:px-5 px-[120.92px] py-[12.09px] w-full">
              <div className="header-row my-0.5">
                <Img
                  className="common-pointer h-[51px] md:h-auto object-cover w-[134px]"
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
              <ul className="flex md:flex-col flex-row gap-[56.43px] h-14 md:h-auto md:hidden items-center justify-center p-[8.06px] w-auto common-row-list">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[18.14px] text-blue_gray-900 text-center w-auto"
                        size="txtOpenSansRomanBold1814"
                      >
                        Home
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
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
                  </a>
                </li>
                <li>
                  <a href="javascript:">
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
                  </a>
                </li>
                <li>
                  <a href="javascript:">
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
                  </a>
                </li>
                <li>
                  <a href="javascript:">
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
                  </a>
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
          <div className="bg-gray-100 flex flex-col font-unna items-center justify-center max-w-[1209px] mt-12 mx-auto md:px-5 py-[16.12px] rounded-[16px] shadow-bs4 w-full">
            <div className="flex flex-col items-center justify-center p-[8.06px] w-auto">
              <div className="flex flex-col gap-[15.11px] items-center justify-start w-auto">
                <Text
                  className="sm:text-[38.37px] md:text-[44.37px] text-[48.37px] text-blue_gray-900 text-center w-auto"
                  size="txtUnnaBold4837"
                >
                  Your Cart Items
                </Text>
                <Line className="bg-blue_gray-900_cc h-0.5 w-[64%]" />
              </div>
            </div>
            <div className="flex flex-col font-opensans gap-[32.24px] items-center justify-center p-[24.18px] sm:px-5 w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={tableColumns}
                  data={tableData.current}
                  rowClass={"border-b border-blue_gray-900_66"}
                  headerClass=""
                />
              </div>
              <div className="flex flex-col items-end justify-center w-full">
                <div className="flex flex-col gap-[16.12px] items-start justify-center w-[487px] sm:w-full">
                  <div className="flex flex-col gap-[24.18px] items-start justify-center w-full">
                    <div className="flex flex-col gap-[16.12px] items-start justify-center md:px-10 sm:px-5 px-[48.37px] w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900 w-auto"
                          size="txtOpenSansRomanBold2015"
                        >
                          Subtotal
                        </Text>
                        <Text
                          className="sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900 w-auto"
                          size="txtOpenSansRomanBold2015"
                        >
                          $ 99.0
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900 w-auto"
                          size="txtOpenSansRomanBold2015"
                        >
                          Shipping
                        </Text>
                        <Text
                          className="sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900 w-auto"
                          size="txtOpenSansRomanBold2015"
                        >
                          Flat Rate
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-900_66 h-px w-full" />
                  </div>
                  <div className="flex flex-row h-8 md:h-auto items-center justify-between md:px-10 sm:px-5 px-[48.37px] w-full">
                    <Text
                      className="sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900 w-auto"
                      size="txtOpenSansRomanBold2015"
                    >
                      Total
                    </Text>
                    <Text
                      className="sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-blue_gray-900 w-auto"
                      size="txtOpenSansRomanBold2015"
                    >
                      $ 99.0
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[29px] md:px-10 sm:px-5 px-[120px] w-full">
          <Button
            className="common-pointer cursor-pointer font-bold h-16 leading-[normal] rounded-lg sm:text-[16.15px] md:text-[18.15px] text-[20.15px] text-center w-[346px]"
            onClick={() => navigate("/checkout")}
            shape="round"
            color="green_700"
            size="2xl"
            variant="fill"
          >
            CheckOut
          </Button>
        </div>
        <div className="flex flex-col items-center mt-[109px] w-full">
          <footer className="bg-green-800_01 flex h-[308px] md:h-auto items-center justify-between pt-[40.31px] md:px-5 w-full">
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
                    <a
                      href="javascript:"
                      className="max-w-[101px] md:max-w-full text-[16.12px] text-white-A700"
                    >
                      <Text size="txtOpenSansRomanBold1612">
                        Privacy Policy
                      </Text>
                    </a>
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
                <div
                  className="common-pointer flex flex-col gap-[16.12px] items-start justify-start w-[81px]"
                  onClick={() => navigate("/checkout")}
                >
                  <a
                    href="javascript:"
                    className="text-[16.12px] text-white-A700 w-full"
                  >
                    <Text size="txtOpenSansRomanBold1612">Support</Text>
                  </a>
                  <div className="flex flex-col gap-[8.06px] items-start justify-start w-full">
                    <a
                      href="javascript:"
                      className="text-[16.12px] text-white-A700 w-full"
                    >
                      <Text size="txtOpenSansRomanBold1612">FAQs</Text>
                    </a>
                    <a
                      href="javascript:"
                      className="max-w-[81px] md:max-w-full text-[16.12px] text-white-A700"
                    >
                      <Text size="txtOpenSansRomanBold1612">Contact Us</Text>
                    </a>
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
        </div>
      </div>
    </>
  );
};

export default CartPage;
