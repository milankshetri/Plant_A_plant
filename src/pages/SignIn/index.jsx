import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const SignInPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1377px] mx-auto md:px-5 w-full">
          <Img
            className="h-[999px] md:h-auto object-cover rounded-[35px]"
            src="images/img_image13.png"
            alt="imageThirteen"
          />
          <div className="flex flex-col md:gap-10 gap-[149px] justify-start md:mt-0 mt-7">
            <Img
              className="h-[43px] md:h-auto md:ml-[0] ml-[426px] object-cover w-[21%] sm:w-full"
              src="images/img_paplogo.png"
              alt="paplogo"
            />
            <div className="flex flex-col gap-[31.4px] items-start justify-start mr-[92px] w-[445px] sm:w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <Text
                  className="sm:text-[31.33px] md:text-[33.33px] text-[35.33px] text-center text-gray-900 tracking-[-1.41px] w-full"
                  size="txtInterSemiBold3533"
                >
                  Sign In
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-center p-[15.7px] rounded-[14px] w-full">
                  <div
                    className="common-pointer flex flex-row gap-[15.7px] items-center justify-center w-auto"
                    onClick={() => googleSignIn()}
                  >
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[19px]"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <Text
                      className="text-[15.7px] text-blue_gray-800 text-center w-auto"
                      size="txtInterSemiBold157"
                    >
                      Sign up with Google
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-full">
                <div className="md:h-5 h-[27px] py-[3px] relative w-full">
                  <Line className="absolute bg-blue_gray-50 bottom-[44%] h-px inset-x-[0] mx-auto w-full" />
                  <Text
                    className="absolute bg-white-A700 h-max inset-[0] justify-center m-auto px-[7px] text-blue_gray-500 text-center text-sm w-max"
                    size="txtInterRegular14"
                  >
                    Or
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[15.7px] items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-[3.93px] items-start justify-start w-full">
                    <Text
                      className="text-[13.74px] text-gray-900_01 w-full"
                      size="txtInterMedium1374"
                    >
                      Name
                    </Text>
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[54px] md:h-auto items-center justify-start p-[15.7px] rounded-[14px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-[13.74px] text-gray-400 w-auto"
                          size="txtInterMedium1374Gray400"
                        >
                          What should we call you?
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-[3.93px] items-start justify-start w-full">
                    <Text
                      className="text-[13.74px] text-gray-900_01 w-full"
                      size="txtInterMedium1374"
                    >
                      Password
                    </Text>
                    <Input
                      name="inputframe"
                      placeholder="••••••••"
                      className="font-medium md:h-auto p-0 placeholder:text-gray-400 sm:h-auto text-[13.74px] text-left w-full"
                      wrapClassName="border border-gray-300 border-solid rounded-[14px] w-full"
                      color="white_A700"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[13.74px] text-gray-400 w-full"
                    size="txtInterMedium1374Gray400"
                  >
                    Must be at least 8 characters
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[25.51px] items-center justify-center w-full">
                <Button
                  className="common-pointer cursor-pointer font-semibold outline outline-light_green-600 text-base text-center w-[445px]"
                  onClick={() => navigate("/homepage")}
                  shape="round"
                  color="green_800"
                  size="2xl"
                  variant="fill"
                >
                  Log In
                </Button>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Button
                    className="common-pointer !text-black-900 cursor-pointer min-w-[206px] text-[13.74px] text-center"
                    onClick={() => navigate("/signup")}
                    shape="square"
                  >
                    Dont have an Account? Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
