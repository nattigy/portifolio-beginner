import { Heading, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div
    style={{
      backgroundColor: "white",
      color:"black",
      borderRadius: "10px"
    }}
    >
      <VStack>
        <Image
          style={{
            borderRadius: "10px"
          }}
          src={imageSrc}
        />
        <div
        style={{
          padding: "10px 20px",
          textAlign: "left"
        }}
        >
          <Heading as='h4' size='md' >{title}</Heading>
          <Text 
            style={{
              color: "grey",
              margin: "20px 0px"
            }}
          >
            {description}
          </Text>
          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </div>
      </VStack>
    </div>
  );
};

export default Card;
