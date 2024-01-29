import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-[7px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    green_700: "bg-green-700 shadow-bs text-white-A700",
    green_800_01: "bg-green-800_01 text-gray-50_01",
    green_800: "bg-green-800 text-white-A700",
    gray_100: "bg-gray-100",
    gray_900_02: "bg-gray-900_02",
  },
};
const sizes = {
  xs: "pl-1 py-1",
  sm: "p-[5px]",
  md: "p-2",
  lg: "p-3",
  xl: "p-[15px]",
  "2xl": "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "green_700",
    "green_800_01",
    "green_800",
    "gray_100",
    "gray_900_02",
  ]),
};

export { Button };
