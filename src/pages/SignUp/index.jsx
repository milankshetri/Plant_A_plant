import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const SignUpPage = () => {
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
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1356px] mx-auto md:px-5 w-full">
          <Img
            className="h-[985px] md:h-auto object-cover rounded-[34px]"
            src="images/img_image13_985x695.png"
            alt="imageThirteen"
          />
          <div className="flex flex-col md:gap-10 gap-[100px] justify-start md:mt-0 mt-[27px]">
            <Img
              className="h-[42px] md:h-auto md:ml-[0] ml-[419px] object-cover w-[21%] sm:w-full"
              src="images/img_paplogo.png"
              alt="paplogo"
            />
            <div className="flex flex-col gap-[30.93px] items-start justify-start mr-[91px] w-[438px] sm:w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <Text
                  className="sm:text-[30.799999999999997px] md:text-[32.8px] text-[34.8px] text-center text-gray-900 tracking-[-1.39px] w-full"
                  size="txtInterSemiBold348"
                >
                  Create an account
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-center p-[15.47px] rounded-[14px] w-full">
                  <div
                    className="common-pointer flex flex-row gap-[15.47px] items-center justify-center w-auto"
                    onClick={() => googleSignIn()}
                  >
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[19px]"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <Text
                      className="text-[15.47px] text-blue_gray-800 text-center w-auto"
                      size="txtInterSemiBold1547"
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
              <div className="flex flex-col gap-[15.47px] items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-[3.87px] items-start justify-start w-full">
                    <Text
                      className="text-[13.53px] text-gray-900_01 w-full"
                      size="txtInterMedium1353"
                    >
                      Name
                    </Text>
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[54px] md:h-auto items-center justify-start p-[15.47px] rounded-[14px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-[13.53px] text-gray-400 w-auto"
                          size="txtInterMedium1353Gray400"
                        >
                          What should we call you?
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-[3.87px] items-start justify-start w-full">
                    <Text
                      className="text-[13.53px] text-gray-900_01 w-full"
                      size="txtInterMedium1353"
                    >
                      Email
                    </Text>
                    <Input
                      name="email"
                      placeholder="you@domain.com"
                      className="font-medium md:h-auto p-0 placeholder:text-gray-400 sm:h-auto text-[13.53px] text-left w-full"
                      wrapClassName="border border-gray-300 border-solid rounded-[14px] w-full"
                      type="email"
                      color="white_A700"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-[3.87px] items-start justify-start w-full">
                    <Text
                      className="text-[13.53px] text-gray-900_01 w-full"
                      size="txtInterMedium1353"
                    >
                      Password
                    </Text>
                    <Input
                      name="inputframe"
                      placeholder="••••••••"
                      className="font-medium md:h-auto p-0 placeholder:text-gray-400 sm:h-auto text-[13.53px] text-left w-full"
                      wrapClassName="border border-gray-300 border-solid rounded-[14px] w-full"
                      color="white_A700"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[13.53px] text-gray-400 w-full"
                    size="txtInterMedium1353Gray400"
                  >
                    Must be at least 8 characters
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[25.13px] items-center justify-center w-full">
                <Button
                  className="cursor-pointer font-semibold outline outline-light_green-600 text-base text-center w-[438px]"
                  shape="round"
                  color="green_800"
                  size="2xl"
                  variant="fill"
                >
                  Create account
                </Button>
                <div className="flex flex-row gap-[3.87px] items-center justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-[13.53px] text-black-900 w-auto"
                      size="txtInterRegular1353"
                    >
                      Already an member?
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-[7px] w-auto">
                    <div
                      className="common-pointer flex flex-col items-center justify-center rounded-[7px] w-auto"
                      onClick={() => navigate("/")}
                    >
                      <a
                        href="javascript:"
                        className="text-center text-light_green-600_01 text-sm w-auto"
                      >
                        <Text size="txtInterSemiBold14">Log in</Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
