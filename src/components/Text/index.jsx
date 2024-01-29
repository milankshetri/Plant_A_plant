import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtOpenSansLight24: "font-light font-opensans",
  txtOpenSansRomanBold1814: "font-bold font-opensans",
  txtInterSemiBold157: "font-inter font-semibold",
  txtOpenSansRegular16Bluegray90099: "font-normal font-opensans",
  txtOpenSansRomanBold1612: "font-bold font-opensans",
  txtInterMedium1353: "font-inter font-medium",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtInterRegular1353: "font-inter font-normal",
  txtRobotoRegular20: "font-normal font-roboto",
  txtInterSemiBold348: "font-inter font-semibold",
  txtOpenSansSemiBold18Bluegray900: "font-opensans font-semibold",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtOpenSansBold16WhiteA700: "font-bold font-opensans",
  txtOpenSansSemiBold20Gray100: "font-opensans font-semibold",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtOpenSansBold32: "font-bold font-opensans",
  txtOpenSansSemiBold100: "font-opensans font-semibold",
  txtOpenSansSemiBold24: "font-opensans font-semibold",
  txtInterSemiBold1547: "font-inter font-semibold",
  txtInterRegular14: "font-inter font-normal",
  txtInterMedium1353Gray400: "font-inter font-medium",
  txtOpenSansRegular28: "font-normal font-opensans",
  txtOpenSansSemiBold20: "font-opensans font-semibold",
  txtOpenSansRegular24: "font-normal font-opensans",
  txtOpenSansSemiBold16Bluegray900: "font-opensans font-semibold",
  txtOpenSansBold20: "font-bold font-opensans",
  txtOpenSansSemiBold16: "font-opensans font-semibold",
  txtOpenSansSemiBold18: "font-opensans font-semibold",
  txtOpenSansRegular20: "font-normal font-opensans",
  txtOpenSansSemiBold20Green700: "font-opensans font-semibold",
  txtInterMedium1374: "font-inter font-medium",
  txtOpenSansRomanBold2015: "font-bold font-opensans",
  txtInterSemiBold3533: "font-inter font-semibold",
  txtOpenSansRegular20Bluegray90099: "font-normal font-opensans",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterMedium1374Gray400: "font-inter font-medium",
  txtOpenSansBold16: "font-bold font-opensans",
  txtOpenSansRomanBold2418: "font-bold font-opensans",
  txtUnnaBold4837: "font-bold font-unna",
  txtOpenSansBold12: "font-bold font-opensans",
  txtOpenSansLight16: "font-light font-opensans",
  txtOpenSansRegular16WhiteA700: "font-normal font-opensans",
  txtInterMedium36: "font-inter font-medium",
  txtOpenSansRegular16Bluegray900: "font-normal font-opensans",
  txtOpenSansRegular32: "font-normal font-opensans",
  txtOpenSansRomanBold1612Bluegray9007f: "font-bold font-opensans",
  txtUnnaBold48: "font-bold font-unna",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
