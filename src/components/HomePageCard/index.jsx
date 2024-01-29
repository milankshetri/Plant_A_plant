import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";

const HomePageCard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={props.className}>
        <Img
          className="md:h-auto h-full object-cover rounded-lg w-full"
          alt="frameSixtyFive"
          src={props?.image}
        />
        <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
          <Text
            className="text-blue_gray-900 text-xl w-full"
            size="txtOpenSansBold20"
          >
            {props?.plantname}
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-blue_gray-900 text-center text-xl w-auto"
              size="txtOpenSansRegular20"
            >
              {props?.price}
            </Text>
          </div>
        </div>
        <Button
          className="cursor-pointer font-bold font-opensans h-16 leading-[normal] rounded-lg text-center text-xl w-full"
          shape="round"
          color="green_700"
          size="2xl"
          variant="fill"
          onClick={() => navigate("/product")}
        >
          {props?.buybutton}
          
        </Button>
      </div>
    </>
  );
};

HomePageCard.defaultProps = {
  image: "images/img_frame65.png",
  plantname: "Jade Terrarium",
  price: "$ 350",
  buybutton: "Buy",
};

export default HomePageCard;
