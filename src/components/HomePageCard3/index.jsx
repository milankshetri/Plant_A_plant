import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "components";

const HomePageCard3 = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[318px] items-center justify-center p-2 rounded-lg w-full"
          style={{ backgroundImage: "url('images/img_frame61.png')" }}
        >
          {!!props?.indoorplants ? (
            <Text
              className="max-w-[328px] md:max-w-full text-2xl md:text-[22px] text-center text-shadow-ts text-white-A700 sm:text-xl tracking-[4.80px] uppercase"
              size="txtOpenSansSemiBold24"
            >
              {props?.indoorplants}
            </Text>
          ) : null}
        </div>
        <Button
          className="cursor-pointer font-bold font-opensans h-16 leading-[normal] rounded-lg text-center text-xl w-full"
          shape="round"
          color="green_700"
          size="2xl"
          variant="fill"
          onClick={() => navigate("/shoppage")}
        >
          {props?.shopnow}
        </Button>
      </div>
    </>
  );
};

HomePageCard3.defaultProps = { shopnow: "Shop Now" };

export default HomePageCard3;
